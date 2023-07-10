import React from 'react';

export function Register() {
    return (
        <div className="Register">
            <h1>REGISTER</h1>
            <div>
                <input type="text" placeholder="email" />
            </div>
            <div>
                <input type="text" placeholder="Username" />
            </div>
            <div>
                <input type="password" placeholder="Password" />
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" />
            </div>
            <button>Create</button>
        </div>
    );
}




