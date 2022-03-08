import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from './component/Index'
import { Box } from '@material-ui/core';

function App() {
	return (
		<Box>
			<Index/>
		</Box>
	);
}


export default App;
