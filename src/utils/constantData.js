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
        options: ['Port of Barcelona', 'Port of Rotterdam','Port of New York','Port of Shanghai','Port of Singapore'],
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
        options: ['Truck', 'Cargo Ship','Cargo Plane','Plane','Bulk Carrier'],
    },
    {
        label: 'Ship Mode',
        placeholderValue: 'Select Ship Mode',
        name: 'shipMode',
        options: ['Air', 'Ocean','Road'],
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