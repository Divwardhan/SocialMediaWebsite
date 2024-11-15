import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Stack } from '@mui/material';

const suggestions = [
  { username: 'shau_ag05', suggestedFor: 'Suggested for you' },
  { username: 'nilayagrawal4', suggestedFor: 'Suggested for you' },
  { username: 'sonakshidubey', suggestedFor: 'Suggested for you' },
  { username: 'yashhhhh_070', suggestedFor: 'Suggested for you' },
  { username: 'electrocuted_engineer_', suggestedFor: 'Suggested for you' },
];

const RightBar = () => {
  // State to track followed users
  const [followedUsers, setFollowedUsers] = useState({});

  // Handle follow/unfollow toggle
  const handleFollowToggle = (username) => {
    setFollowedUsers((prev) => ({
      ...prev,
      [username]: !prev[username], // Toggle the follow status
    }));
  };

  return (
    <Box
      sx={{
        width: '240px',
        padding: 1.5,
        bgcolor: 'transparent',
        color: 'text.primary',
        boxShadow: 1,
      }}
    >
      {/* User Section */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
        <Avatar src="/path/to/your-avatar.jpg" alt="agrdiv" sx={{ width: 30, height: 30 }} />
        <Box>
          <Typography variant="body2" fontWeight="bold" noWrap>
            agrdiv
          </Typography>
          <Button variant="text" color="primary" size="small" sx={{ padding: 0 }}>
            Switch
          </Button>
        </Box>
      </Stack>

      {/* Suggested for You Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
          Suggested for you
        </Typography>
        <Button variant="text" color="primary" size="small" sx={{ padding: 0 }}>
          See All
        </Button>
      </Stack>

      {/* Suggestions List */}
      {suggestions.map((user, index) => (
        <Stack
          key={index}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1 }}
        >
          {/* Align Avatar and User Info */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
            <Avatar
              src={`/path/to/avatar-${user.username}.jpg`}
              alt={user.username}
              sx={{ width: 28, height: 28 }}
            />
            <Box>
              <Typography variant="body2" fontWeight="bold" noWrap>
                {user.username}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {user.suggestedFor}
              </Typography>
            </Box>
          </Stack>

          {/* Follow Button */}
          <Button
            variant="text"
            color="primary"
            size="small"
            sx={{ padding: 0, minWidth: '70px' }}
            onClick={() => handleFollowToggle(user.username)}
          >
            {followedUsers[user.username] ? 'Unfollow' : 'Follow'}
          </Button>
        </Stack>
      ))}

      {/* Footer */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified
        </Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
