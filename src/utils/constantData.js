import supplierImg from '../assets/SupplierIcon.svg'
import manfImg from '../assets/ManufacturingIcon.svg'
import distributionImg from '../assets/DistributionIcon.svg'
import warehouseImg from '../assets/WarehouseIcon.svg'
import retailImg from '../assets/RetailIcon.svg'
import customerImg from '../assets/CustomerIcon.svg'
import theme from '../styles/theme'

export const dropdownObj = [
    {
        label: 'From Port',
        placeholderValue: 'Select from Port',
        name: 'fromPort',
        options: [ 'Port of Rotterdam','Port of Barcelona','Port of New York','Port of Shanghai','Port of Singapore'],
    },
    {
        label: 'To Port',
        placeholderValue: 'Select To Port',
        name: 'toPort',
        options: ['Port of Mumbai', 'Port of Shanghai','Port of Kaohsiung'],
    },
    {
        label: 'Carrier',
        placeholderValue: 'Select Carrier',
        name: 'carrier',
        options: ['Cargo Ship','Truck', 'Cargo Plane','Plane','Bulk Carrier'],
    },
    {
        label: 'Ship Mode',
        placeholderValue: 'Select Ship Mode',
        name: 'shipMode',
        options: ['Ocean','Air', 'Road'],
    }
]

export const siteInfo = [
    {
        label: 'Products delievered',
        count: 24000,
        countColor: theme.palette.blue
    },
    {
        label: 'In transit',
        count: 2400,
        countColor: theme.palette.red
    },
    {
        label: 'Pending Payments',
        count: 19000,
        countColor: theme.palette.yellow
    },
    {
        label: 'Payments Done',
        count: 5000,
        countColor: theme.palette.green
    }
]

export const valueChain = [
    {
        headerLabel: 'Supplier',
        innerObj: [
            {
                imageUrl: supplierImg,
                subLabel: "Supplier Network"
            }
        ]
    },
    {
        headerLabel: 'Manufacturing',
        innerObj: [
            {
                imageUrl: manfImg,
                subLabel: "Manufacturing"
            }
        ]
    },
    {
        headerLabel: 'Distribution',
        innerObj: [
            {
                imageUrl: warehouseImg,
                subLabel: "Warehouse"
            },
            {
                imageUrl: distributionImg,
                subLabel: "Distribution Center"
            },
            {
                imageUrl: retailImg,
                subLabel: "Retail Stores"
            },
        ]
    },
    {
        headerLabel: 'Customers',
        innerObj: [
            {
                imageUrl: customerImg,
                subLabel: "Customer"
            },
        ]
    }
]

export const exceptionCategory = [
    {
        label: 'Customs Clearance Issue',
        value: 32,
        color:'#7705BC'
    },
    {
        label: 'Maritime Congestion',
        value: 20,
        color:'#AD30C3'
    },
    {
        label: 'Extreme Weather',
        value: 21,
        color:'#58CED6'
    },
    {
        label: 'Route Closure',
        value: 21,
        color:'#01B2FE'
    },
    {
        label: 'Geopolitical Issue',
        value: 6,
        color:'#010BFE'
    },
]