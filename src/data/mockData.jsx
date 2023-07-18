import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Icon } from '@mui/material';

export const mockDataTeam = [
    {
        id: '1',
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        age: 35,
        phone: '(665)121-5454',
        access: 'admin'
    },
    {
        id: '2',
        name: 'Cersei Lannister',
        email: 'CerseiLannister@gmail.com',
        age: 42,
        phone: '(421)314-2288',
        access: 'manager'
    }
];

export const cardData = [
    {
        id: '1',
        title: 'Youth',
        value: 250,
        icon: <Icon><GroupIcon style={{ fontSize: '2rem' }} /></Icon>
    },
    {
        id: '2',
        title: 'Users',
        value: 4,
        icon: <Icon><AdminPanelSettingsIcon style={{ fontSize: '2rem' }} /></Icon>
    }
];

export const rows = [
    {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35
    },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        age: 42
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        age: 45
    },
    {
        id: 4,
        lastName: 'Stark',
        firstName: 'Arya',
        age: 16
    },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        age: null
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: null,
        age: 150
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        age: 44
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        age: 36
    },
    {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        age: 65
    }
];
