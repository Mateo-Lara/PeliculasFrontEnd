import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Media() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            En Mantenimiento
        </div>
    );
}
