import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StackOverflowContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
`;

const StackOverflowProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.3/users/4412438?site=stackoverflow'
        );
        const data = await response.json();
        setProfile(data.items[0]);
      } catch (error) {
        console.error('Error fetching StackOverflow profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <StackOverflowContainer>
      {profile ? (
        <>
          <h3>{profile.display_name}</h3>
          <p>Reputation: {profile.reputation}</p>
          <p>Gold Badges: {profile.badge_counts.gold}</p>
          <p>Silver Badges: {profile.badge_counts.silver}</p>
          <p>Bronze Badges: {profile.badge_counts.bronze}</p>
          <p>Location: {profile.location}</p>
          <p>Website: <a href={profile.website_url} target="_blank" rel="noopener noreferrer">{profile.website_url}</a></p>
          <p><a href={`https://stackoverflow.com/users/${profile.user_id}`} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </StackOverflowContainer>
  );
};

export default StackOverflowProfile;
