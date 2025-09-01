import React from 'react'

function UserCard({ name, role, location, avatar }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      marginTop: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  )
}

export default UserCard
