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
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Art',
        service: 'Commissions',
        user_id: 1
      },
      {
        id: 2,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        category: 'Repair',
        service: 'Computers',
        user_id: 1
      },
      {
        id: 3,
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Food',
        service: 'Meal prep',
        user_id: 1
      },
      {
        id: 4,
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Health',
        service: 'Hugs',
        user_id: 1
      },
      {
        id: 5,
        description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Education',
        service: 'Tutoring',
        user_id: 1
      },
      {
        id: 6,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Other',
        service: 'Plus one',
        user_id: 1
      },
    ]
}

const profiles = {
  profiles: [
    {
      id: 1,
      full_name: 'Fred',
      email: 'fred@thinkful.com',
      zip: '54353',
      profile_desc: 'I love to help.',
      profile_img_url: 'image.com',
    },
    {
      id: 2,
      full_name: 'Dave',
      email: 'dave@thinkful.com',
      zip: '23643',
      profile_desc: 'I love to help.',
      profile_img_url: 'image.com',
    },
    {
      id: 3,
      full_name: 'Mitchell',
      email: 'mitchell@thinkful.com',
      zip: '95431',
      profile_desc: 'I love to help.',
      profile_img_url: 'image.com',
    },
    {
      id: 4,
      full_name: 'Diane',
      email: 'diane@thinkful.com',
      zip: '23474',
      profile_desc: 'I love to help.',
      profile_img_url: 'image.com',
    },
    {
      id: 5,
      full_name: 'Jamie',
      email: 'jamie@thinkful.com',
      zip: '25345',
      profile_desc: 'I love to help.',
      profile_img_url: 'image.com',
    }
  ]
}

export default {CATEGORIES, serviceCards, profiles};
