import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([])
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }
        fetchHistory();
    }, [])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <div style={{ background: 'var(--bg-gradient)', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', gap: '1rem' }}>
                <IconButton
                    onClick={() => routeTo("/home")}
                    sx={{
                        color: 'white',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { background: 'rgba(255,255,255,0.2)' }
                    }}
                >
                    <HomeIcon />
                </IconButton >
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>Meeting History</Typography>
            </div>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {(meetings && Array.isArray(meetings) && meetings.length !== 0) ? meetings.map((e, i) => {
                    return (
                        <Card key={i} sx={{
                            background: 'rgba(15, 23, 42, 0.6)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            color: 'white',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                            }
                        }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                    <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                                        <VideocamIcon />
                                    </Avatar>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        Code: {e.meetingCode}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'var(--text-muted)' }}>
                                    <EventIcon fontSize="small" />
                                    <Typography sx={{ fontSize: 14 }}>
                                        Date: {formatDate(e.date)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    )
                }) : (
                    <Typography sx={{ color: 'var(--text-muted)', fontSize: '1.2rem', gridColumn: '1 / -1', textAlign: 'center', mt: 5 }}>
                        No meeting history found.
                    </Typography>
                )}
            </Box>
        </div>
    )
}