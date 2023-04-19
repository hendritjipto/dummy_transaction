## Dummy Data - Transaction
Transaction based on business: 
```javascript
{
  business_id: '000000000000000000103',
  type: 'MONEY_OUT',
  occurred_at: 2023-04-10T04:58:52.606Z,
  status: 'COMPLETED',
  channel: 'CHANNEL_1',
  channel_type: 'CHANNEL_TYPE_1',
  amount: '156',
  currency: 'SGD',
  recipient_account_detail: {
    bank_code: '6455934716170185700504484',
    account_number: '45900400959673486258503475040515880172326209004383281256448419798172181094259964'
  },
  custom_data: {
    card_number: '6399-9623-0570-0533',
    card_country: 'Jamaica',
    eci_code: '8792087549219553065584557'
  },
  created_at: 2023-04-03T22:44:58.294Z,
  updated_at: 2023-04-05T18:26:10.984Z
}
```

Transaction history: 
```javascript
{
  business_id: '',
  type: 'MONEY_OUT',
  occurred_at: 2023-04-08T05:22:08.279Z,
  status: 'COMPLETED',
  channel: 'CHANNEL_1',
  channel_type: 'CHANNEL_TYPE_2',
  amount: 388000,
  currency: 'IDR',
  sender_entity_id: '000000000000000113078',
  sender_detail: {
    id: 'dc47ef9aeeed8aa5afc08871',
    name: 'Jon Daniel',
    type: 'TYPE_1',
    golive_at: null,
    business_data: {
      entity_segment: 'SEGMENT1',
      entity_type: 'ENTITY_TYPE1',
      name: 'Koelpin LLC',
      email: 'Max73@yahoo.com',
      phone: '433.936.5499 x0930',
      address: '67929 Medhurst Glen Apt. 095',
      golive_status: 'LIVE',
      website: 'https://neighboring-burrow.info',
      first_transacted_at: 2023-04-08T18:06:50.759Z,
      country_of_registration: 'ID',
      owner_name: 'Elbert Brown',
      owner_phone: '1-634-226-8663 x769',
      owner_email: 'Letitia18@hotmail.com',
      risk_score: 4
    },
    individual_data: {
      date_of_birth: 1983-07-19T15:47:18.294Z,
      name: 'Bryan Crist MD',
      email: 'Giovanni.Schmeler@yahoo.com',
      phone: '391.859.1742 x88574',
      nationality: 'San Marino',
      gender: 'Male',
      first_transacted_at: 2023-04-14T07:46:19.743Z
    },
    device_data: {
      fingerprint_session_id: '0bfbda8dfdb24aebeffaf8ca',
      ip_address: '170.239.75.92'
    },
    accounts: '85158',
    custom_data: '5832'
  },
  sender_account_detail: {
    id: 'e86ca0dd0aacc4f8eabe516a',
    type: 'SENDER_TYPE1',
    bank_code: '8192829843',
    currency: 'IDR',
    account_number: '66553664312239379533101403808679161178350996124376944831425671269254725767687238',
    holder_id: '1d4e87de78caf69b823e73e9'
  },
  recipient_entity_id: '79bcb14e685e88b91b2415a2',
  recipient_detail: {
    id: '697d4cb5aabb0d6f03aabb9b',
    name: 'Bryan Collins',
    type: 'RECIPIENT_TYPE2',
    golive_at: null,
    business_data: {
      entity_segment: 'SEGMENT_2',
      entity_type: 'ENTITY_TYPE1',
      name: 'Koelpin LLC',
      email: 'Max73@yahoo.com',
      phone: '433.936.5499 x0930',
      address: '67929 Medhurst Glen Apt. 095',
      golive_status: 'NOTLIVE',
      website: 'https://neighboring-burrow.info',
      first_transacted_at: null,
      country_of_registration: 'ID',
      owner_name: 'Kelley McLaughlin',
      owner_phone: '671.865.9512 x16103',
      owner_email: 'Marty_Green70@yahoo.com',
      risk_score: 92
    },
    individual_data: {
      date_of_birth: '',
      name: '',
      email: '',
      phone: '',
      nationality: '',
      gender: '',
      first_transacted_at: null
    },
    device_data: {
      fingerprint_session_id: '240aebed7f68fe2d3469dc8c',
      ip_address: '161.136.210.29'
    },
    accounts: '71035861219108376198240505700359053319643677074245297978744312124506693217275418',
    custom_data: {
      card_number: '6398-2691-8398-1248',
      card_country: 'Saint Barthelemy',
      eci_code: '3184020298063640830957463'
    }
  },
  recipient_account_detail: {
    id: 'aacf9fccb89b886acb124ca1',
    type: 'RECIPIENT_TYPE2',
    bank_code: '1607583884',
    currency: 'IDR',
    account_number: '0429001993108836170228998',
    holder_id: 'f257e640bad9a1ab3457b132'
  },
  device_data: {
    fingerprint_session_id: '11ccbccedceb9a0fd203a5bc',
    ip_address: '131.166.207.245'
  },
  created_at: 2023-04-03T01:23:30.408Z,
  updated_at: 2023-04-03T20:37:11.553Z
}
}
```
