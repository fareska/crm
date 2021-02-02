import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        color: 'white'
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <AppBar position="static">
                    <TabList onChange={handleChange}
                        aria-label="simple tabs example">
                        <Tab label={<Link to='clients'><div>Clients</div></Link>} value="1" />
                        <Tab label={<Link to='actions'><div>Actions</div></Link>} value="2" />
                        <Tab label={<Link to='analytics'> <div>Analytics</div></Link>} value="3" />
                    </TabList>
                </AppBar>
            </TabContext>
        </div>
    );
}

{/* <TabPanel value="1">Item One</TabPanel>
<TabPanel value="2">Item Two</TabPanel>
<TabPanel value="3">Item Three</TabPanel> */}
//         <Tab label= />
//         <Tab label= />
//         <Tab label= />





// import React from 'react';
// import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     color:'white',
//     backgroundColor:'grey'
//   },
// });

// export default function NavBar() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="secondary"
//         textColor='primary'
//         centered
//       >
//         <Tab label={<Link to='clients'><div>Clients</div></Link>} />
//         <Tab label={<Link to='actions'><div>Actions</div></Link>} />
//         <Tab label={<Link to='analytics'> <div>Analytics</div></Link>} />
//       </Tabs>
//     </Paper>
//   );
// }
