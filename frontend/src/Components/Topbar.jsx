import Story from "./Story";
import Carousel from 'react-material-ui-carousel';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
const Topbar = () => {

  const stories = Array(30).fill(<Story />);
  const storyGroups = [];

  for (let i = 0; i < stories.length; i += 10) {
    storyGroups.push(stories.slice(i, i + 10));
  }

  return (
    <>
      <Carousel
        sx={{
          width: "700px",
        }}
        animation="slide"

        autoPlay={false}
        cycleNavigation={false}
        navButtonsAlwaysVisible={true}
        indicators={false}
        NextIcon={<ExpandCircleDownIcon sx={{ rotate: "-90deg" }} />}
        PrevIcon={<ExpandCircleDownIcon sx={{ rotate: "90deg" }} />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: '#fff'
          }
        }}
      >
        {
          storyGroups.map((group, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-around' }}>
              {group}
            </div>
          ))
        }
      </Carousel>
    </>
  );
};

export default Topbar;
