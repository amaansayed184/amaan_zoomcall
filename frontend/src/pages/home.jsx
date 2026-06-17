import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        if (!meetingCode) return;
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div style={{ background: 'var(--bg-gradient)', minHeight: '100vh' }}>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Nexus Meeting</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate("/history")}>
                        <IconButton>
                            <RestoreIcon />
                        </IconButton>
                        <p style={{ margin: 0 }}>History</p>
                    </div>

                    <Button className="glass-button" onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Premium video meetings. Now free for everyone.</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            We re-engineered the service we built for secure business meetings to make it free and available for all.
                        </p>

                        <div style={{ display: 'flex', gap: "15px", alignItems: 'center' }}>
                            <TextField
                                className="glass-input"
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Enter meeting code"
                                variant="outlined"
                                sx={{ flex: 1 }}
                            />
                            <Button
                                onClick={handleJoinVideoCall}
                                variant='contained'
                                sx={{
                                    height: '56px',
                                    px: 4,
                                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                    boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))',
                                    }
                                }}
                            >
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img src='/logo3.png' alt="Video Meeting Illustration" />
                </div>
            </div>
        </div>
    )
}

export default withAuth(HomeComponent)