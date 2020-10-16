import React from 'react';

const BurntToastContext = React.createContext({
    categories: [],
    services: [],
    getCategoriesAndServices: () => {},
    setSearchService: () => {},
});

export default BurntToastContext;

// export class BurntToastProvider extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       categories: [],
//       services: [],
//     }
//   }

//   getCategoriesAndServices() {
//     BurntToastService.getAllCategories().then(categories =>
//       this.setState({
//         categories
//       })
//     );
//     BurntToastService.getAllServices().then(services =>
//       this.setState({
//         services
//       })
//     );
//   }

//   render() {
//     const value = {
//       categories: this.state.categories,
//       services: this.state.services,
//       getCategoriesAndServices: this.getCategoriesAndServices,
//     }
//     return (
//       <BurntToastContext.Provider value={value}>
//         {this.props.children}
//       </BurntToastContext.Provider>
//     );
//   }
// }