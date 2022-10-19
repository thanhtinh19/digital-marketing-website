import "../Style/OurPortfolio/LayoutOurPortfolio.scss"
import { useState, useRef } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function LayoutOurPortfolio() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="portfolio" id="portfolio">
            <h1>Our Portfolio</h1>
            <Box >
                <Tabs
                    centered value={value}
                    onChange={handleChange}
                    textColor='inherit'
                    TabIndicatorProps={{ sx: { backgroundColor: '#E71D36', height: 2, textColor: '#011627', fontFamily: 'Inter' } }}
                >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Website Design" {...a11yProps(1)} />
                    <Tab label="Mobile App" {...a11yProps(2)} />
                    <Tab label="Design Branding" {...a11yProps(3)} />
                    <Tab label="UI/UX" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
            <TabPanel value={value} index={4}></TabPanel>
            <button className="btn">View more</button>
        </div>
    );
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div className="tab-panel">
                    <img src="../../img/image/OurPortfolio/img1.png" />
                    <img src="../../img/image/OurPortfolio/img2.png" />
                    <img src="../../img/image/OurPortfolio/img3.png" />
                    <img src="../../img/image/OurPortfolio/img4.png" />
                    <img src="../../img/image/OurPortfolio/img5.png" />
                    <img src="../../img/image/OurPortfolio/img6.png" />
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default LayoutOurPortfolio;