import GitHubRepos from "../../components/GitHubRepos/GitHubRepos"
import EBirdData from "../../components/EbirdData/EbirdData"
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <div>
      <GitHubRepos />
      <div>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom align="center">
          Embedded Projects:
        </Typography>
      </div>
      <EBirdData />
    </div>
  )
}

export default Projects