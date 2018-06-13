export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Purchase Orders',
      url: '/po',
      icon: 'icon-docs',
      children: [
        {
          name: 'Create',
          icon: 'icon-plus',
          url: '/po/create'
        },
        {
          name: 'Search',
          icon: 'icon-magnifier',
          url: '/po/search'
        }
      ]
    },
    {
      name: 'Supplier Invoices',
      url: '/sinvoice',
      icon: 'icon-folder',
      children: [
        {
          name: 'Create',
          icon: 'icon-plus',
          url: '/sinvoice/create'
        },
        {
          name: 'Search',
          icon: 'icon-magnifier',
          url: '/sinvoice/search'
        }
      ]
    },
    {
      name: 'Suppliers',
      url: '/suppliers',
      icon: 'icon-grid',
      children: [
        {
          name: 'Create',
          icon: 'icon-plus',
          url: '/supplier/create'
        },
        {
          name: 'Search',
          icon: 'icon-magnifier',
          url: '/supplier/search'
        }
      ]
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: 'icon-people',
      children: [
        {
          name: 'Create',
          icon: 'icon-plus',
          url: '/customers/create'
        },
        {
          name: 'Search',
          icon: 'icon-magnifier',
          url: '/customers/search'
        }
      ]
    }
  ]
}
