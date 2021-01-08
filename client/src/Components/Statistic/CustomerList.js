import React from 'react';
import { MDBDataTable } from 'mdbreact';

const CustomerList = () => {
  const data = {
    columns: [
      {
        label: 'Họ và tên',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Địa chỉ',
        field: 'address',
        sort: 'asc',
        width: 270
      },
      {
        label: 'CMND',
        field: 'CMND',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Tuổi',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Quốc tịch',
        field: 'Nation',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Giới tính',
        field: 'Gender',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        address: 'System Architect',
        CMND: 'Edinburgh',
        age: '61',
        Nation: '2011/04/25',
        Gender: '$320'
      },
      {
        name: 'Garrett Winters',
        address: 'Accountant',
        CMND: 'Tokyo',
        age: '63',
        Nation: '2011/07/25',
        Gender: '$170'
      },
      {
        name: 'Ashton Cox',
        address: 'Junior Technical Author',
        CMND: 'San Francisco',
        age: '66',
        Nation: '2009/01/12',
        Gender: '$86'
      },
      {
        name: 'Cedric Kelly',
        address: 'Senior Javascript Developer',
        CMND: 'Edinburgh',
        age: '22',
        Nation: '2012/03/29',
        Gender: '$433'
      },
      {
        name: 'Airi Satou',
        address: 'Accountant',
        CMND: 'Tokyo',
        age: '33',
        Nation: '2008/11/28',
        Gender: '$162'
      },
      {
        name: 'Brielle Williamson',
        address: 'Integration Specialist',
        CMND: 'New York',
        age: '61',
        Nation: '2012/12/02',
        Gender: '$372'
      },
      {
        name: 'Herrod Chandler',
        address: 'Sales Assistant',
        CMND: 'San Francisco',
        age: '59',
        Nation: '2012/08/06',
        Gender: '$137'
      },
      {
        name: 'Rhona Davidson',
        address: 'Integration Specialist',
        CMND: 'Tokyo',
        age: '55',
        Nation: '2010/10/14',
        Gender: '$327'
      },
      {
        name: 'Colleen Hurst',
        address: 'Javascript Developer',
        CMND: 'San Francisco',
        age: '39',
        Nation: '2009/09/15',
        Gender: '$205'
      },
      {
        name: 'Sonya Frost',
        address: 'Software Engineer',
        CMND: 'Edinburgh',
        age: '23',
        Nation: '2008/12/13',
        Gender: '$103'
      },
      {
        name: 'Jena Gaines',
        address: 'CMND Manager',
        CMND: 'London',
        age: '30',
        Nation: '2008/12/19',
        Gender: '$90'
      },
      {
        name: 'Quinn Flynn',
        address: 'Support Lead',
        CMND: 'Edinburgh',
        age: '22',
        Nation: '2013/03/03',
        Gender: '$342'
      },
      {
        name: 'Charde Marshall',
        address: 'Regional Director',
        CMND: 'San Francisco',
        age: '36',
        Nation: '2008/10/16',
        Gender: '$470'
      },
      {
        name: 'Haley Kennedy',
        address: 'Senior Marketing Designer',
        CMND: 'London',
        age: '43',
        Nation: '2012/12/18',
        Gender: '$313'
      },
      {
        name: 'Tatyana Fitzpatrick',
        address: 'Regional Director',
        CMND: 'London',
        age: '19',
        Nation: '2010/03/17',
        Gender: '$385'
      },
      {
        name: 'Michael Silva',
        address: 'Marketing Designer',
        CMND: 'London',
        age: '66',
        Nation: '2012/11/27',
        Gender: '$198'
      },
      {
        name: 'Paul Byrd',
        address: 'Chief Financial CMNDr (CFO)',
        CMND: 'New York',
        age: '64',
        Nation: '2010/06/09',
        Gender: '$725'
      },
      {
        name: 'Gloria Little',
        address: 'Systems Administrator',
        CMND: 'New York',
        age: '59',
        Nation: '2009/04/10',
        Gender: '$237'
      },
      {
        name: 'Bradley Greer',
        address: 'Software Engineer',
        CMND: 'London',
        age: '41',
        Nation: '2012/10/13',
        Gender: '$132'
      },
      {
        name: 'Dai Rios',
        address: 'Personnel Lead',
        CMND: 'Edinburgh',
        age: '35',
        Nation: '2012/09/26',
        Gender: '$217'
      },
      {
        name: 'Jenette Caldwell',
        address: 'Development Lead',
        CMND: 'New York',
        age: '30',
        Nation: '2011/09/03',
        Gender: '$345'
      },
      {
        name: 'Yuri Berry',
        address: 'Chief Marketing CMNDr (CMO)',
        CMND: 'New York',
        age: '40',
        Nation: '2009/06/25',
        Gender: '$675'
      },
      {
        name: 'Caesar Vance',
        address: 'Pre-Sales Support',
        CMND: 'New York',
        age: '21',
        Nation: '2011/12/12',
        Gender: '$106'
      },
      {
        name: 'Doris Wilder',
        address: 'Sales Assistant',
        CMND: 'Sidney',
        age: '23',
        Nation: '2010/09/20',
        Gender: '$85'
      },
      {
        name: 'Angelica Ramos',
        address: 'Chief Executive CMNDr (CEO)',
        CMND: 'London',
        age: '47',
        Nation: '2009/10/09',
        Gender: '$1'
      },
      {
        name: 'Gavin Joyce',
        address: 'Developer',
        CMND: 'Edinburgh',
        age: '42',
        Nation: '2010/12/22',
        Gender: '$92'
      },
      {
        name: 'Jennifer Chang',
        address: 'Regional Director',
        CMND: 'Singapore',
        age: '28',
        Nation: '2010/11/14',
        Gender: '$357'
      },
      {
        name: 'Brenden Wagner',
        address: 'Software Engineer',
        CMND: 'San Francisco',
        age: '28',
        Nation: '2011/06/07',
        Gender: '$206'
      },
      {
        name: 'Fiona Green',
        address: 'Chief Operating CMNDr (COO)',
        CMND: 'San Francisco',
        age: '48',
        Nation: '2010/03/11',
        Gender: '$850'
      },
      {
        name: 'Shou Itou',
        address: 'Regional Marketing',
        CMND: 'Tokyo',
        age: '20',
        Nation: '2011/08/14',
        Gender: '$163'
      },
      {
        name: 'Michelle House',
        address: 'Integration Specialist',
        CMND: 'Sidney',
        age: '37',
        Nation: '2011/06/02',
        Gender: '$95'
      },
      {
        name: 'Suki Burks',
        address: 'Developer',
        CMND: 'London',
        age: '53',
        Nation: '2009/10/22',
        Gender: '$114'
      },
      {
        name: 'Prescott Bartlett',
        address: 'Technical Author',
        CMND: 'London',
        age: '27',
        Nation: '2011/05/07',
        Gender: '$145'
      },
      {
        name: 'Gavin Cortez',
        address: 'Team Leader',
        CMND: 'San Francisco',
        age: '22',
        Nation: '2008/10/26',
        Gender: '$235'
      },
      {
        name: 'Martena Mccray',
        address: 'Post-Sales support',
        CMND: 'Edinburgh',
        age: '46',
        Nation: '2011/03/09',
        Gender: '$324'
      },
      {
        name: 'Unity Butler',
        address: 'Marketing Designer',
        CMND: 'San Francisco',
        age: '47',
        Nation: '2009/12/09',
        Gender: '$85'
      },
      {
        name: 'Howard Hatfield',
        address: 'CMND Manager',
        CMND: 'San Francisco',
        age: '51',
        Nation: '2008/12/16',
        Gender: '$164'
      },
      {
        name: 'Hope Fuentes',
        address: 'Secretary',
        CMND: 'San Francisco',
        age: '41',
        Nation: '2010/02/12',
        Gender: '$109'
      },
      {
        name: 'Vivian Harrell',
        address: 'Financial Controller',
        CMND: 'San Francisco',
        age: '62',
        Nation: '2009/02/14',
        Gender: '$452'
      },
      {
        name: 'Timothy Mooney',
        address: 'CMND Manager',
        CMND: 'London',
        age: '37',
        Nation: '2008/12/11',
        Gender: '$136'
      },
      {
        name: 'Jackson Bradshaw',
        address: 'Director',
        CMND: 'New York',
        age: '65',
        Nation: '2008/09/26',
        Gender: '$645'
      },
      {
        name: 'Olivia Liang',
        address: 'Support Engineer',
        CMND: 'Singapore',
        age: '64',
        Nation: '2011/02/03',
        Gender: '$234'
      },
      {
        name: 'Bruno Nash',
        address: 'Software Engineer',
        CMND: 'London',
        age: '38',
        Nation: '2011/05/03',
        Gender: '$163'
      },
      {
        name: 'Sakura Yamamoto',
        address: 'Support Engineer',
        CMND: 'Tokyo',
        age: '37',
        Nation: '2009/08/19',
        Gender: '$139'
      },
      {
        name: 'Thor Walton',
        address: 'Developer',
        CMND: 'New York',
        age: '61',
        Nation: '2013/08/11',
        Gender: '$98'
      },
      {
        name: 'Finn Camacho',
        address: 'Support Engineer',
        CMND: 'San Francisco',
        age: '47',
        Nation: '2009/07/07',
        Gender: '$87'
      },
      {
        name: 'Serge Baldwin',
        address: 'Data Coordinator',
        CMND: 'Singapore',
        age: '64',
        Nation: '2012/04/09',
        Gender: '$138'
      },
      {
        name: 'Zenaida Frank',
        address: 'Software Engineer',
        CMND: 'New York',
        age: '63',
        Nation: '2010/01/04',
        Gender: '$125'
      },
      {
        name: 'Zorita Serrano',
        address: 'Software Engineer',
        CMND: 'San Francisco',
        age: '56',
        Nation: '2012/06/01',
        Gender: '$115'
      },
      {
        name: 'Jennifer Acosta',
        address: 'Junior Javascript Developer',
        CMND: 'Edinburgh',
        age: '43',
        Nation: '2013/02/01',
        Gender: '$75'
      },
      {
        name: 'Cara Stevens',
        address: 'Sales Assistant',
        CMND: 'New York',
        age: '46',
        Nation: '2011/12/06',
        Gender: '$145'
      },
      {
        name: 'Hermione Butler',
        address: 'Regional Director',
        CMND: 'London',
        age: '47',
        Nation: '2011/03/21',
        Gender: '$356'
      },
      {
        name: 'Lael Greer',
        address: 'Systems Administrator',
        CMND: 'London',
        age: '21',
        Nation: '2009/02/27',
        Gender: '$103'
      },
      {
        name: 'Jonas Alexander',
        address: 'Developer',
        CMND: 'San Francisco',
        age: '30',
        Nation: '2010/07/14',
        Gender: '$86'
      },
      {
        name: 'Shad Decker',
        address: 'Regional Director',
        CMND: 'Edinburgh',
        age: '51',
        Nation: '2008/11/13',
        Gender: '$183'
      },
      {
        name: 'Michael Bruce',
        address: 'Javascript Developer',
        CMND: 'Singapore',
        age: '29',
        Nation: '2011/06/27',
        Gender: '$183'
      },
      {
        name: 'Donna Snider',
        address: 'Customer Support',
        CMND: 'New York',
        age: '27',
        Nation: '2011/01/25',
        Gender: '$112'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default CustomerList;