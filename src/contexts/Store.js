const CATEGORIES = {
  SELECT: ['SELECT'],
  Automotive: ['Car Painting', 'Bumper Repair', 'RideShare', 'Tire Changes', 'Maintenance Training'],
  Art: ['Art Classes', 'Commissions'], 
  Beauty: ['Homemade','Makeup', 'Skin Care'], 
  Computers: ['Web design','Hardware Fix','Software setup','Web development'],
  Education: ['Language Learning','Tutorials','Tutor'], 
  Electronics: ['How to', 'Quick fix'],
  Food: ['Diet','Produce', 'Home cook', 'Meal prep',],              
  Handmade: ['BlackSmith','Knitting','Steelwork','Woodwork'],
  Health: ['Exercise', 'Healing', 'Hugs', 'Sound baths','Weightlifting'],
  Home: ['Decor','Painting','Repair', 'Roofing'], 
  Repair: ['Computers','Fences','Hearts'],
  Sports: ['Improving form','Improving score', 'Team'],
  Other: ['Active listening', 'Plus one', 'Dance partner']
};

const serviceCards = {
  
  cards: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Art',
        service: 'Commissions',
        user_id: 1
      },
      {
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        category: 'Repair',
        service: 'Computers',
        user_id: 1
      },
      {
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Food',
        service: 'Meal prep',
        user_id: 1
      },
      {
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Health',
        service: 'Hugs',
        user_id: 1
      },
      {
        description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Education',
        service: 'Tutoring',
        user_id: 1
      },
      {
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Other',
        service: 'Plus one',
        user_id: 1
      },
    ]
}

export default {CATEGORIES, serviceCards};