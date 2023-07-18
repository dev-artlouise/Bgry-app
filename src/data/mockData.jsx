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
]


export const cardData = [
    {
        id: '1',
        title: 'Youth',
        value: 250,
        icon: <Icon ><GroupIcon style={{ fontSize: '3rem' }} /></Icon>,
    },

    {
        id: '2',
        title: 'Users',
        value: 4,
        icon: <Icon>< AdminPanelSettingsIcon /></Icon>
    }
]