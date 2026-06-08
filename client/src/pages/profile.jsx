import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const response = await fetch("", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    setUser(result.user);
                } else {
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (loading) return <h2 style={{ textAlign: "center" }}>Loading your dashboard...</h2>;

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Welcome Home, {user?.name}!</h2>
            <p>Username: @{user?.username}</p>
            <p>Email: {user?.email}</p>
            
            <button 
                onClick={handleLogout}
                style={{ backgroundColor: "#ff6b6b", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}
            >
                Log Out
            </button>
        </div>
    );
}

export default profile;
