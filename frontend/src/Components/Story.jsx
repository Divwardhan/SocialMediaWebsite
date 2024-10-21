import { Avatar, Box } from "@mui/material"

const Story = ({ size }) => {
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          background: "linear-gradient(90deg, rgba(0,241,255,1) 0%, rgba(91,9,121,1) 30%, rgba(0,142,255,1) 100%)",
          borderRadius: "50%"
        }}
      >
        <Avatar
          sx={{
            margin: "2px",
            border: "1px solid black",
            width: size ? `${size}px` : 'default',
            height: size ? `${size}px` : 'default'
          }}
          alt="Avatar"
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        />
      </Box>
    </>
  )
}

export default Story
