import {AriaButtonProps, useButton} from '@react-aria/button'
import 'flag-icons/css/flag-icons.min.css'
import React from 'react'

import {useDOMRef} from '../utils/use-dom-ref'

export const Button = React.forwardRef<HTMLButtonElement, AriaButtonProps>(
  (props, ref) => {
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(props, buttonRef)
    return (
      <button {...buttonProps} ref={buttonRef}>
        {props.children}
      </button>
    )
  },
)

export const Icon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='#201F1E'
    />
  </svg>
)

export const countries = [
  {
    name: 'Afghanistan',
    'alpha-2': 'AF',
    'alpha-3': 'AFG',
    'country-code': '004',
    'phone-code': '+93',
  },
  {
    name: 'Åland Islands',
    'alpha-2': 'AX',
    'alpha-3': 'ALA',
    'country-code': '248',
    'phone-code': '+358-18',
  },
  {
    name: 'Albania',
    'alpha-2': 'AL',
    'alpha-3': 'ALB',
    'country-code': '008',
    'phone-code': '+355',
  },
  {
    name: 'Algeria',
    'alpha-2': 'DZ',
    'alpha-3': 'DZA',
    'country-code': '012',
    'phone-code': '+213',
  },
  {
    name: 'American Samoa',
    'alpha-2': 'AS',
    'alpha-3': 'ASM',
    'country-code': '016',
    'phone-code': '+1-684',
  },
  {
    name: 'Andorra',
    'alpha-2': 'AD',
    'alpha-3': 'AND',
    'country-code': '020',
    'phone-code': '+376',
  },
  {
    name: 'Angola',
    'alpha-2': 'AO',
    'alpha-3': 'AGO',
    'country-code': '024',
    'phone-code': '+244',
  },
  {
    name: 'Anguilla',
    'alpha-2': 'AI',
    'alpha-3': 'AIA',
    'country-code': '660',
    'phone-code': '+1-264',
  },
  {
    name: 'Antarctica',
    'alpha-2': 'AQ',
    'alpha-3': 'ATA',
    'country-code': '010',
    'phone-code': '+',
  },
  {
    name: 'Antigua and Barbuda',
    'alpha-2': 'AG',
    'alpha-3': 'ATG',
    'country-code': '028',
    'phone-code': '+1-268',
  },
  {
    name: 'Argentina',
    'alpha-2': 'AR',
    'alpha-3': 'ARG',
    'country-code': '032',
    'phone-code': '+54',
  },
  {
    name: 'Armenia',
    'alpha-2': 'AM',
    'alpha-3': 'ARM',
    'country-code': '051',
    'phone-code': '+374',
  },
  {
    name: 'Aruba',
    'alpha-2': 'AW',
    'alpha-3': 'ABW',
    'country-code': '533',
    'phone-code': '+297',
  },
  {
    name: 'Australia',
    'alpha-2': 'AU',
    'alpha-3': 'AUS',
    'country-code': '036',
    'phone-code': '+61',
  },
  {
    name: 'Austria',
    'alpha-2': 'AT',
    'alpha-3': 'AUT',
    'country-code': '040',
    'phone-code': '+43',
  },
  {
    name: 'Azerbaijan',
    'alpha-2': 'AZ',
    'alpha-3': 'AZE',
    'country-code': '031',
    'phone-code': '+994',
  },
  {
    name: 'Bahamas',
    'alpha-2': 'BS',
    'alpha-3': 'BHS',
    'country-code': '044',
    'phone-code': '+1-242',
  },
  {
    name: 'Bahrain',
    'alpha-2': 'BH',
    'alpha-3': 'BHR',
    'country-code': '048',
    'phone-code': '+973',
  },
  {
    name: 'Bangladesh',
    'alpha-2': 'BD',
    'alpha-3': 'BGD',
    'country-code': '050',
    'phone-code': '+880',
  },
  {
    name: 'Barbados',
    'alpha-2': 'BB',
    'alpha-3': 'BRB',
    'country-code': '052',
    'phone-code': '+1-246',
  },
  {
    name: 'Belarus',
    'alpha-2': 'BY',
    'alpha-3': 'BLR',
    'country-code': '112',
    'phone-code': '+375',
  },
  {
    name: 'Belgium',
    'alpha-2': 'BE',
    'alpha-3': 'BEL',
    'country-code': '056',
    'phone-code': '+32',
  },
  {
    name: 'Belize',
    'alpha-2': 'BZ',
    'alpha-3': 'BLZ',
    'country-code': '084',
    'phone-code': '+501',
  },
  {
    name: 'Benin',
    'alpha-2': 'BJ',
    'alpha-3': 'BEN',
    'country-code': '204',
    'phone-code': '+229',
  },
  {
    name: 'Bermuda',
    'alpha-2': 'BM',
    'alpha-3': 'BMU',
    'country-code': '060',
    'phone-code': '+1-441',
  },
  {
    name: 'Bhutan',
    'alpha-2': 'BT',
    'alpha-3': 'BTN',
    'country-code': '064',
    'phone-code': '+975',
  },
  {
    name: 'Bolivia (Plurinational State of)',
    'alpha-2': 'BO',
    'alpha-3': 'BOL',
    'country-code': '068',
    'phone-code': '+591',
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    'alpha-2': 'BQ',
    'alpha-3': 'BES',
    'country-code': '535',
    'phone-code': '+599',
  },
  {
    name: 'Bosnia and Herzegovina',
    'alpha-2': 'BA',
    'alpha-3': 'BIH',
    'country-code': '070',
    'phone-code': '+387',
  },
  {
    name: 'Botswana',
    'alpha-2': 'BW',
    'alpha-3': 'BWA',
    'country-code': '072',
    'phone-code': '+267',
  },
  {
    name: 'Bouvet Island',
    'alpha-2': 'BV',
    'alpha-3': 'BVT',
    'country-code': '074',
    'phone-code': '+',
  },
  {
    name: 'Brazil',
    'alpha-2': 'BR',
    'alpha-3': 'BRA',
    'country-code': '076',
    'phone-code': '+55',
  },
  {
    name: 'British Indian Ocean Territory',
    'alpha-2': 'IO',
    'alpha-3': 'IOT',
    'country-code': '086',
    'phone-code': '+246',
  },
  {
    name: 'Brunei Darussalam',
    'alpha-2': 'BN',
    'alpha-3': 'BRN',
    'country-code': '096',
    'phone-code': '+673',
  },
  {
    name: 'Bulgaria',
    'alpha-2': 'BG',
    'alpha-3': 'BGR',
    'country-code': '100',
    'phone-code': '+359',
  },
  {
    name: 'Burkina Faso',
    'alpha-2': 'BF',
    'alpha-3': 'BFA',
    'country-code': '854',
    'phone-code': '+226',
  },
  {
    name: 'Burundi',
    'alpha-2': 'BI',
    'alpha-3': 'BDI',
    'country-code': '108',
    'phone-code': '+257',
  },
  {
    name: 'Cabo Verde',
    'alpha-2': 'CV',
    'alpha-3': 'CPV',
    'country-code': '132',
    'phone-code': '+238',
  },
  {
    name: 'Cambodia',
    'alpha-2': 'KH',
    'alpha-3': 'KHM',
    'country-code': '116',
    'phone-code': '+855',
  },
  {
    name: 'Cameroon',
    'alpha-2': 'CM',
    'alpha-3': 'CMR',
    'country-code': '120',
    'phone-code': '+237',
  },
  {
    name: 'Canada',
    'alpha-2': 'CA',
    'alpha-3': 'CAN',
    'country-code': '124',
    'phone-code': '+1',
  },
  {
    name: 'Cayman Islands',
    'alpha-2': 'KY',
    'alpha-3': 'CYM',
    'country-code': '136',
    'phone-code': '+1-345',
  },
  {
    name: 'Central African Republic',
    'alpha-2': 'CF',
    'alpha-3': 'CAF',
    'country-code': '140',
    'phone-code': '+236',
  },
  {
    name: 'Chad',
    'alpha-2': 'TD',
    'alpha-3': 'TCD',
    'country-code': '148',
    'phone-code': '+235',
  },
  {
    name: 'Chile',
    'alpha-2': 'CL',
    'alpha-3': 'CHL',
    'country-code': '152',
    'phone-code': '+56',
  },
  {
    name: 'China',
    'alpha-2': 'CN',
    'alpha-3': 'CHN',
    'country-code': '156',
    'phone-code': '+86',
  },
  {
    name: 'Christmas Island',
    'alpha-2': 'CX',
    'alpha-3': 'CXR',
    'country-code': '162',
    'phone-code': '+61',
  },
  {
    name: 'Cocos (Keeling) Islands',
    'alpha-2': 'CC',
    'alpha-3': 'CCK',
    'country-code': '166',
    'phone-code': '+61',
  },
  {
    name: 'Colombia',
    'alpha-2': 'CO',
    'alpha-3': 'COL',
    'country-code': '170',
    'phone-code': '+57',
  },
  {
    name: 'Comoros',
    'alpha-2': 'KM',
    'alpha-3': 'COM',
    'country-code': '174',
    'phone-code': '+269',
  },
  {
    name: 'Congo',
    'alpha-2': 'CG',
    'alpha-3': 'COG',
    'country-code': '178',
    'phone-code': '+242',
  },
  {
    name: 'Congo, Democratic Republic of the',
    'alpha-2': 'CD',
    'alpha-3': 'COD',
    'country-code': '180',
    'phone-code': '+243',
  },
  {
    name: 'Cook Islands',
    'alpha-2': 'CK',
    'alpha-3': 'COK',
    'country-code': '184',
    'phone-code': '+682',
  },
  {
    name: 'Costa Rica',
    'alpha-2': 'CR',
    'alpha-3': 'CRI',
    'country-code': '188',
    'phone-code': '+506',
  },
  {
    name: "Côte d'Ivoire",
    'alpha-2': 'CI',
    'alpha-3': 'CIV',
    'country-code': '384',
    'phone-code': '+225',
  },
  {
    name: 'Croatia',
    'alpha-2': 'HR',
    'alpha-3': 'HRV',
    'country-code': '191',
    'phone-code': '+385',
  },
  {
    name: 'Cuba',
    'alpha-2': 'CU',
    'alpha-3': 'CUB',
    'country-code': '192',
    'phone-code': '+53',
  },
  {
    name: 'Curaçao',
    'alpha-2': 'CW',
    'alpha-3': 'CUW',
    'country-code': '531',
    'phone-code': '+599',
  },
  {
    name: 'Cyprus',
    'alpha-2': 'CY',
    'alpha-3': 'CYP',
    'country-code': '196',
    'phone-code': '+357',
  },
  {
    name: 'Czechia',
    'alpha-2': 'CZ',
    'alpha-3': 'CZE',
    'country-code': '203',
    'phone-code': '+420',
  },
  {
    name: 'Denmark',
    'alpha-2': 'DK',
    'alpha-3': 'DNK',
    'country-code': '208',
    'phone-code': '+45',
  },
  {
    name: 'Djibouti',
    'alpha-2': 'DJ',
    'alpha-3': 'DJI',
    'country-code': '262',
    'phone-code': '+253',
  },
  {
    name: 'Dominica',
    'alpha-2': 'DM',
    'alpha-3': 'DMA',
    'country-code': '212',
    'phone-code': '+1-767',
  },
  {
    name: 'Dominican Republic',
    'alpha-2': 'DO',
    'alpha-3': 'DOM',
    'country-code': '214',
    'phone-code': '+1-809 and 1-829',
  },
  {
    name: 'Ecuador',
    'alpha-2': 'EC',
    'alpha-3': 'ECU',
    'country-code': '218',
    'phone-code': '+593',
  },
  {
    name: 'Egypt',
    'alpha-2': 'EG',
    'alpha-3': 'EGY',
    'country-code': '818',
    'phone-code': '+20',
  },
  {
    name: 'El Salvador',
    'alpha-2': 'SV',
    'alpha-3': 'SLV',
    'country-code': '222',
    'phone-code': '+503',
  },
  {
    name: 'Equatorial Guinea',
    'alpha-2': 'GQ',
    'alpha-3': 'GNQ',
    'country-code': '226',
    'phone-code': '+240',
  },
  {
    name: 'Eritrea',
    'alpha-2': 'ER',
    'alpha-3': 'ERI',
    'country-code': '232',
    'phone-code': '+291',
  },
  {
    name: 'Estonia',
    'alpha-2': 'EE',
    'alpha-3': 'EST',
    'country-code': '233',
    'phone-code': '+372',
  },
  {
    name: 'Eswatini',
    'alpha-2': 'SZ',
    'alpha-3': 'SWZ',
    'country-code': '748',
    'phone-code': '+268',
  },
  {
    name: 'Ethiopia',
    'alpha-2': 'ET',
    'alpha-3': 'ETH',
    'country-code': '231',
    'phone-code': '+251',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    'alpha-2': 'FK',
    'alpha-3': 'FLK',
    'country-code': '238',
    'phone-code': '+500',
  },
  {
    name: 'Faroe Islands',
    'alpha-2': 'FO',
    'alpha-3': 'FRO',
    'country-code': '234',
    'phone-code': '+298',
  },
  {
    name: 'Fiji',
    'alpha-2': 'FJ',
    'alpha-3': 'FJI',
    'country-code': '242',
    'phone-code': '+679',
  },
  {
    name: 'Finland',
    'alpha-2': 'FI',
    'alpha-3': 'FIN',
    'country-code': '246',
    'phone-code': '+358',
  },
  {
    name: 'France',
    'alpha-2': 'FR',
    'alpha-3': 'FRA',
    'country-code': '250',
    'phone-code': '+33',
  },
  {
    name: 'French Guiana',
    'alpha-2': 'GF',
    'alpha-3': 'GUF',
    'country-code': '254',
    'phone-code': '+594',
  },
  {
    name: 'French Polynesia',
    'alpha-2': 'PF',
    'alpha-3': 'PYF',
    'country-code': '258',
    'phone-code': '+689',
  },
  {
    name: 'French Southern Territories',
    'alpha-2': 'TF',
    'alpha-3': 'ATF',
    'country-code': '260',
    'phone-code': '+',
  },
  {
    name: 'Gabon',
    'alpha-2': 'GA',
    'alpha-3': 'GAB',
    'country-code': '266',
    'phone-code': '+241',
  },
  {
    name: 'Gambia',
    'alpha-2': 'GM',
    'alpha-3': 'GMB',
    'country-code': '270',
    'phone-code': '+220',
  },
  {
    name: 'Georgia',
    'alpha-2': 'GE',
    'alpha-3': 'GEO',
    'country-code': '268',
    'phone-code': '+995',
  },
  {
    name: 'Germany',
    'alpha-2': 'DE',
    'alpha-3': 'DEU',
    'country-code': '276',
    'phone-code': '+49',
  },
  {
    name: 'Ghana',
    'alpha-2': 'GH',
    'alpha-3': 'GHA',
    'country-code': '288',
    'phone-code': '+233',
  },
  {
    name: 'Gibraltar',
    'alpha-2': 'GI',
    'alpha-3': 'GIB',
    'country-code': '292',
    'phone-code': '+350',
  },
  {
    name: 'Greece',
    'alpha-2': 'GR',
    'alpha-3': 'GRC',
    'country-code': '300',
    'phone-code': '+30',
  },
  {
    name: 'Greenland',
    'alpha-2': 'GL',
    'alpha-3': 'GRL',
    'country-code': '304',
    'phone-code': '+299',
  },
  {
    name: 'Grenada',
    'alpha-2': 'GD',
    'alpha-3': 'GRD',
    'country-code': '308',
    'phone-code': '+1-473',
  },
  {
    name: 'Guadeloupe',
    'alpha-2': 'GP',
    'alpha-3': 'GLP',
    'country-code': '312',
    'phone-code': '+590',
  },
  {
    name: 'Guam',
    'alpha-2': 'GU',
    'alpha-3': 'GUM',
    'country-code': '316',
    'phone-code': '+1-671',
  },
  {
    name: 'Guatemala',
    'alpha-2': 'GT',
    'alpha-3': 'GTM',
    'country-code': '320',
    'phone-code': '+502',
  },
  {
    name: 'Guernsey',
    'alpha-2': 'GG',
    'alpha-3': 'GGY',
    'country-code': '831',
    'phone-code': '+44-1481',
  },
  {
    name: 'Guinea',
    'alpha-2': 'GN',
    'alpha-3': 'GIN',
    'country-code': '324',
    'phone-code': '+224',
  },
  {
    name: 'Guinea-Bissau',
    'alpha-2': 'GW',
    'alpha-3': 'GNB',
    'country-code': '624',
    'phone-code': '+245',
  },
  {
    name: 'Guyana',
    'alpha-2': 'GY',
    'alpha-3': 'GUY',
    'country-code': '328',
    'phone-code': '+592',
  },
  {
    name: 'Haiti',
    'alpha-2': 'HT',
    'alpha-3': 'HTI',
    'country-code': '332',
    'phone-code': '+509',
  },
  {
    name: 'Heard Island and McDonald Islands',
    'alpha-2': 'HM',
    'alpha-3': 'HMD',
    'country-code': '334',
    'phone-code': '+ ',
  },
  {
    name: 'Holy See',
    'alpha-2': 'VA',
    'alpha-3': 'VAT',
    'country-code': '336',
    'phone-code': '+379',
  },
  {
    name: 'Honduras',
    'alpha-2': 'HN',
    'alpha-3': 'HND',
    'country-code': '340',
    'phone-code': '+504',
  },
  {
    name: 'Hong Kong',
    'alpha-2': 'HK',
    'alpha-3': 'HKG',
    'country-code': '344',
    'phone-code': '+852',
  },
  {
    name: 'Hungary',
    'alpha-2': 'HU',
    'alpha-3': 'HUN',
    'country-code': '348',
    'phone-code': '+36',
  },
  {
    name: 'Iceland',
    'alpha-2': 'IS',
    'alpha-3': 'ISL',
    'country-code': '352',
    'phone-code': '+354',
  },
  {
    name: 'India',
    'alpha-2': 'IN',
    'alpha-3': 'IND',
    'country-code': '356',
    'phone-code': '+91',
  },
  {
    name: 'Indonesia',
    'alpha-2': 'ID',
    'alpha-3': 'IDN',
    'country-code': '360',
    'phone-code': '+62',
  },
  {
    name: 'Iran (Islamic Republic of)',
    'alpha-2': 'IR',
    'alpha-3': 'IRN',
    'country-code': '364',
    'phone-code': '+98',
  },
  {
    name: 'Iraq',
    'alpha-2': 'IQ',
    'alpha-3': 'IRQ',
    'country-code': '368',
    'phone-code': '+964',
  },
  {
    name: 'Ireland',
    'alpha-2': 'IE',
    'alpha-3': 'IRL',
    'country-code': '372',
    'phone-code': '+353',
  },
  {
    name: 'Isle of Man',
    'alpha-2': 'IM',
    'alpha-3': 'IMN',
    'country-code': '833',
    'phone-code': '+44-1624',
  },
  {
    name: 'Israel',
    'alpha-2': 'IL',
    'alpha-3': 'ISR',
    'country-code': '376',
    'phone-code': '+972',
  },
  {
    name: 'Italy',
    'alpha-2': 'IT',
    'alpha-3': 'ITA',
    'country-code': '380',
    'phone-code': '+39',
  },
  {
    name: 'Jamaica',
    'alpha-2': 'JM',
    'alpha-3': 'JAM',
    'country-code': '388',
    'phone-code': '+1-876',
  },
  {
    name: 'Japan',
    'alpha-2': 'JP',
    'alpha-3': 'JPN',
    'country-code': '392',
    'phone-code': '+81',
  },
  {
    name: 'Jersey',
    'alpha-2': 'JE',
    'alpha-3': 'JEY',
    'country-code': '832',
    'phone-code': '+44-1534',
  },
  {
    name: 'Jordan',
    'alpha-2': 'JO',
    'alpha-3': 'JOR',
    'country-code': '400',
    'phone-code': '+962',
  },
  {
    name: 'Kazakhstan',
    'alpha-2': 'KZ',
    'alpha-3': 'KAZ',
    'country-code': '398',
    'phone-code': '+7',
  },
  {
    name: 'Kenya',
    'alpha-2': 'KE',
    'alpha-3': 'KEN',
    'country-code': '404',
    'phone-code': '+254',
  },
  {
    name: 'Kiribati',
    'alpha-2': 'KI',
    'alpha-3': 'KIR',
    'country-code': '296',
    'phone-code': '+686',
  },
  {
    name: "Korea (Democratic People's Republic of)",
    'alpha-2': 'KP',
    'alpha-3': 'PRK',
    'country-code': '408',
    'phone-code': '+850',
  },
  {
    name: 'Korea, Republic of',
    'alpha-2': 'KR',
    'alpha-3': 'KOR',
    'country-code': '410',
    'phone-code': '+82',
  },
  {
    name: 'Kuwait',
    'alpha-2': 'KW',
    'alpha-3': 'KWT',
    'country-code': '414',
    'phone-code': '+965',
  },
  {
    name: 'Kyrgyzstan',
    'alpha-2': 'KG',
    'alpha-3': 'KGZ',
    'country-code': '417',
    'phone-code': '+996',
  },
  {
    name: "Lao People's Democratic Republic",
    'alpha-2': 'LA',
    'alpha-3': 'LAO',
    'country-code': '418',
    'phone-code': '+856',
  },
  {
    name: 'Latvia',
    'alpha-2': 'LV',
    'alpha-3': 'LVA',
    'country-code': '428',
    'phone-code': '+371',
  },
  {
    name: 'Lebanon',
    'alpha-2': 'LB',
    'alpha-3': 'LBN',
    'country-code': '422',
    'phone-code': '+961',
  },
  {
    name: 'Lesotho',
    'alpha-2': 'LS',
    'alpha-3': 'LSO',
    'country-code': '426',
    'phone-code': '+266',
  },
  {
    name: 'Liberia',
    'alpha-2': 'LR',
    'alpha-3': 'LBR',
    'country-code': '430',
    'phone-code': '+231',
  },
  {
    name: 'Libya',
    'alpha-2': 'LY',
    'alpha-3': 'LBY',
    'country-code': '434',
    'phone-code': '+218',
  },
  {
    name: 'Liechtenstein',
    'alpha-2': 'LI',
    'alpha-3': 'LIE',
    'country-code': '438',
    'phone-code': '+423',
  },
  {
    name: 'Lithuania',
    'alpha-2': 'LT',
    'alpha-3': 'LTU',
    'country-code': '440',
    'phone-code': '+370',
  },
  {
    name: 'Luxembourg',
    'alpha-2': 'LU',
    'alpha-3': 'LUX',
    'country-code': '442',
    'phone-code': '+352',
  },
  {
    name: 'Macao',
    'alpha-2': 'MO',
    'alpha-3': 'MAC',
    'country-code': '446',
    'phone-code': '+853',
  },
  {
    name: 'Madagascar',
    'alpha-2': 'MG',
    'alpha-3': 'MDG',
    'country-code': '450',
    'phone-code': '+261',
  },
  {
    name: 'Malawi',
    'alpha-2': 'MW',
    'alpha-3': 'MWI',
    'country-code': '454',
    'phone-code': '+265',
  },
  {
    name: 'Malaysia',
    'alpha-2': 'MY',
    'alpha-3': 'MYS',
    'country-code': '458',
    'phone-code': '+60',
  },
  {
    name: 'Maldives',
    'alpha-2': 'MV',
    'alpha-3': 'MDV',
    'country-code': '462',
    'phone-code': '+960',
  },
  {
    name: 'Mali',
    'alpha-2': 'ML',
    'alpha-3': 'MLI',
    'country-code': '466',
    'phone-code': '+223',
  },
  {
    name: 'Malta',
    'alpha-2': 'MT',
    'alpha-3': 'MLT',
    'country-code': '470',
    'phone-code': '+356',
  },
  {
    name: 'Marshall Islands',
    'alpha-2': 'MH',
    'alpha-3': 'MHL',
    'country-code': '584',
    'phone-code': '+692',
  },
  {
    name: 'Martinique',
    'alpha-2': 'MQ',
    'alpha-3': 'MTQ',
    'country-code': '474',
    'phone-code': '+596',
  },
  {
    name: 'Mauritania',
    'alpha-2': 'MR',
    'alpha-3': 'MRT',
    'country-code': '478',
    'phone-code': '+222',
  },
  {
    name: 'Mauritius',
    'alpha-2': 'MU',
    'alpha-3': 'MUS',
    'country-code': '480',
    'phone-code': '+230',
  },
  {
    name: 'Mayotte',
    'alpha-2': 'YT',
    'alpha-3': 'MYT',
    'country-code': '175',
    'phone-code': '+262',
  },
  {
    name: 'Mexico',
    'alpha-2': 'MX',
    'alpha-3': 'MEX',
    'country-code': '484',
    'phone-code': '+52',
  },
  {
    name: 'Micronesia (Federated States of)',
    'alpha-2': 'FM',
    'alpha-3': 'FSM',
    'country-code': '583',
    'phone-code': '+691',
  },
  {
    name: 'Moldova, Republic of',
    'alpha-2': 'MD',
    'alpha-3': 'MDA',
    'country-code': '498',
    'phone-code': '+373',
  },
  {
    name: 'Monaco',
    'alpha-2': 'MC',
    'alpha-3': 'MCO',
    'country-code': '492',
    'phone-code': '+377',
  },
  {
    name: 'Mongolia',
    'alpha-2': 'MN',
    'alpha-3': 'MNG',
    'country-code': '496',
    'phone-code': '+976',
  },
  {
    name: 'Montenegro',
    'alpha-2': 'ME',
    'alpha-3': 'MNE',
    'country-code': '499',
    'phone-code': '+382',
  },
  {
    name: 'Montserrat',
    'alpha-2': 'MS',
    'alpha-3': 'MSR',
    'country-code': '500',
    'phone-code': '+1-664',
  },
  {
    name: 'Morocco',
    'alpha-2': 'MA',
    'alpha-3': 'MAR',
    'country-code': '504',
    'phone-code': '+212',
  },
  {
    name: 'Mozambique',
    'alpha-2': 'MZ',
    'alpha-3': 'MOZ',
    'country-code': '508',
    'phone-code': '+258',
  },
  {
    name: 'Myanmar',
    'alpha-2': 'MM',
    'alpha-3': 'MMR',
    'country-code': '104',
    'phone-code': '+95',
  },
  {
    name: 'Namibia',
    'alpha-2': 'NA',
    'alpha-3': 'NAM',
    'country-code': '516',
    'phone-code': '+264',
  },
  {
    name: 'Nauru',
    'alpha-2': 'NR',
    'alpha-3': 'NRU',
    'country-code': '520',
    'phone-code': '+674',
  },
  {
    name: 'Nepal',
    'alpha-2': 'NP',
    'alpha-3': 'NPL',
    'country-code': '524',
    'phone-code': '+977',
  },
  {
    name: 'Netherlands',
    'alpha-2': 'NL',
    'alpha-3': 'NLD',
    'country-code': '528',
    'phone-code': '+31',
  },
  {
    name: 'New Caledonia',
    'alpha-2': 'NC',
    'alpha-3': 'NCL',
    'country-code': '540',
    'phone-code': '+687',
  },
  {
    name: 'New Zealand',
    'alpha-2': 'NZ',
    'alpha-3': 'NZL',
    'country-code': '554',
    'phone-code': '+64',
  },
  {
    name: 'Nicaragua',
    'alpha-2': 'NI',
    'alpha-3': 'NIC',
    'country-code': '558',
    'phone-code': '+505',
  },
  {
    name: 'Niger',
    'alpha-2': 'NE',
    'alpha-3': 'NER',
    'country-code': '562',
    'phone-code': '+227',
  },
  {
    name: 'Nigeria',
    'alpha-2': 'NG',
    'alpha-3': 'NGA',
    'country-code': '566',
    'phone-code': '+234',
  },
  {
    name: 'Niue',
    'alpha-2': 'NU',
    'alpha-3': 'NIU',
    'country-code': '570',
    'phone-code': '+683',
  },
  {
    name: 'Norfolk Island',
    'alpha-2': 'NF',
    'alpha-3': 'NFK',
    'country-code': '574',
    'phone-code': '+672',
  },
  {
    name: 'North Macedonia',
    'alpha-2': 'MK',
    'alpha-3': 'MKD',
    'country-code': '807',
    'phone-code': '+389',
  },
  {
    name: 'Northern Mariana Islands',
    'alpha-2': 'MP',
    'alpha-3': 'MNP',
    'country-code': '580',
    'phone-code': '+1-670',
  },
  {
    name: 'Norway',
    'alpha-2': 'NO',
    'alpha-3': 'NOR',
    'country-code': '578',
    'phone-code': '+47',
  },
  {
    name: 'Oman',
    'alpha-2': 'OM',
    'alpha-3': 'OMN',
    'country-code': '512',
    'phone-code': '+968',
  },
  {
    name: 'Pakistan',
    'alpha-2': 'PK',
    'alpha-3': 'PAK',
    'country-code': '586',
    'phone-code': '+92',
  },
  {
    name: 'Palau',
    'alpha-2': 'PW',
    'alpha-3': 'PLW',
    'country-code': '585',
    'phone-code': '+680',
  },
  {
    name: 'Palestine, State of',
    'alpha-2': 'PS',
    'alpha-3': 'PSE',
    'country-code': '275',
    'phone-code': '+970',
  },
  {
    name: 'Panama',
    'alpha-2': 'PA',
    'alpha-3': 'PAN',
    'country-code': '591',
    'phone-code': '+507',
  },
  {
    name: 'Papua New Guinea',
    'alpha-2': 'PG',
    'alpha-3': 'PNG',
    'country-code': '598',
    'phone-code': '+675',
  },
  {
    name: 'Paraguay',
    'alpha-2': 'PY',
    'alpha-3': 'PRY',
    'country-code': '600',
    'phone-code': '+595',
  },
  {
    name: 'Peru',
    'alpha-2': 'PE',
    'alpha-3': 'PER',
    'country-code': '604',
    'phone-code': '+51',
  },
  {
    name: 'Philippines',
    'alpha-2': 'PH',
    'alpha-3': 'PHL',
    'country-code': '608',
    'phone-code': '+63',
  },
  {
    name: 'Pitcairn',
    'alpha-2': 'PN',
    'alpha-3': 'PCN',
    'country-code': '612',
    'phone-code': '+870',
  },
  {
    name: 'Poland',
    'alpha-2': 'PL',
    'alpha-3': 'POL',
    'country-code': '616',
    'phone-code': '+48',
  },
  {
    name: 'Portugal',
    'alpha-2': 'PT',
    'alpha-3': 'PRT',
    'country-code': '620',
    'phone-code': '+351',
  },
  {
    name: 'Puerto Rico',
    'alpha-2': 'PR',
    'alpha-3': 'PRI',
    'country-code': '630',
    'phone-code': '+1-787 and 1-939',
  },
  {
    name: 'Qatar',
    'alpha-2': 'QA',
    'alpha-3': 'QAT',
    'country-code': '634',
    'phone-code': '+974',
  },
  {
    name: 'Réunion',
    'alpha-2': 'RE',
    'alpha-3': 'REU',
    'country-code': '638',
    'phone-code': '+262',
  },
  {
    name: 'Romania',
    'alpha-2': 'RO',
    'alpha-3': 'ROU',
    'country-code': '642',
    'phone-code': '+40',
  },
  {
    name: 'Russian Federation',
    'alpha-2': 'RU',
    'alpha-3': 'RUS',
    'country-code': '643',
    'phone-code': '+7',
  },
  {
    name: 'Rwanda',
    'alpha-2': 'RW',
    'alpha-3': 'RWA',
    'country-code': '646',
    'phone-code': '+250',
  },
  {
    name: 'Saint Barthélemy',
    'alpha-2': 'BL',
    'alpha-3': 'BLM',
    'country-code': '652',
    'phone-code': '+590',
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    'alpha-2': 'SH',
    'alpha-3': 'SHN',
    'country-code': '654',
    'phone-code': '+290',
  },
  {
    name: 'Saint Kitts and Nevis',
    'alpha-2': 'KN',
    'alpha-3': 'KNA',
    'country-code': '659',
    'phone-code': '+1-869',
  },
  {
    name: 'Saint Lucia',
    'alpha-2': 'LC',
    'alpha-3': 'LCA',
    'country-code': '662',
    'phone-code': '+1-758',
  },
  {
    name: 'Saint Martin (French part)',
    'alpha-2': 'MF',
    'alpha-3': 'MAF',
    'country-code': '663',
    'phone-code': '+590',
  },
  {
    name: 'Saint Pierre and Miquelon',
    'alpha-2': 'PM',
    'alpha-3': 'SPM',
    'country-code': '666',
    'phone-code': '+508',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    'alpha-2': 'VC',
    'alpha-3': 'VCT',
    'country-code': '670',
    'phone-code': '+1-784',
  },
  {
    name: 'Samoa',
    'alpha-2': 'WS',
    'alpha-3': 'WSM',
    'country-code': '882',
    'phone-code': '+685',
  },
  {
    name: 'San Marino',
    'alpha-2': 'SM',
    'alpha-3': 'SMR',
    'country-code': '674',
    'phone-code': '+378',
  },
  {
    name: 'Sao Tome and Principe',
    'alpha-2': 'ST',
    'alpha-3': 'STP',
    'country-code': '678',
    'phone-code': '+239',
  },
  {
    name: 'Saudi Arabia',
    'alpha-2': 'SA',
    'alpha-3': 'SAU',
    'country-code': '682',
    'phone-code': '+966',
  },
  {
    name: 'Senegal',
    'alpha-2': 'SN',
    'alpha-3': 'SEN',
    'country-code': '686',
    'phone-code': '+221',
  },
  {
    name: 'Serbia',
    'alpha-2': 'RS',
    'alpha-3': 'SRB',
    'country-code': '688',
    'phone-code': '+381',
  },
  {
    name: 'Seychelles',
    'alpha-2': 'SC',
    'alpha-3': 'SYC',
    'country-code': '690',
    'phone-code': '+248',
  },
  {
    name: 'Sierra Leone',
    'alpha-2': 'SL',
    'alpha-3': 'SLE',
    'country-code': '694',
    'phone-code': '+232',
  },
  {
    name: 'Singapore',
    'alpha-2': 'SG',
    'alpha-3': 'SGP',
    'country-code': '702',
    'phone-code': '+65',
  },
  {
    name: 'Sint Maarten (Dutch part)',
    'alpha-2': 'SX',
    'alpha-3': 'SXM',
    'country-code': '534',
    'phone-code': '+599',
  },
  {
    name: 'Slovakia',
    'alpha-2': 'SK',
    'alpha-3': 'SVK',
    'country-code': '703',
    'phone-code': '+421',
  },
  {
    name: 'Slovenia',
    'alpha-2': 'SI',
    'alpha-3': 'SVN',
    'country-code': '705',
    'phone-code': '+386',
  },
  {
    name: 'Solomon Islands',
    'alpha-2': 'SB',
    'alpha-3': 'SLB',
    'country-code': '090',
    'phone-code': '+677',
  },
  {
    name: 'Somalia',
    'alpha-2': 'SO',
    'alpha-3': 'SOM',
    'country-code': '706',
    'phone-code': '+252',
  },
  {
    name: 'South Africa',
    'alpha-2': 'ZA',
    'alpha-3': 'ZAF',
    'country-code': '710',
    'phone-code': '+27',
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    'alpha-2': 'GS',
    'alpha-3': 'SGS',
    'country-code': '239',
    'phone-code': '+',
  },
  {
    name: 'South Sudan',
    'alpha-2': 'SS',
    'alpha-3': 'SSD',
    'country-code': '728',
    'phone-code': '+211',
  },
  {
    name: 'Spain',
    'alpha-2': 'ES',
    'alpha-3': 'ESP',
    'country-code': '724',
    'phone-code': '+34',
  },
  {
    name: 'Sri Lanka',
    'alpha-2': 'LK',
    'alpha-3': 'LKA',
    'country-code': '144',
    'phone-code': '+94',
  },
  {
    name: 'Sudan',
    'alpha-2': 'SD',
    'alpha-3': 'SDN',
    'country-code': '729',
    'phone-code': '+249',
  },
  {
    name: 'Suriname',
    'alpha-2': 'SR',
    'alpha-3': 'SUR',
    'country-code': '740',
    'phone-code': '+597',
  },
  {
    name: 'Svalbard and Jan Mayen',
    'alpha-2': 'SJ',
    'alpha-3': 'SJM',
    'country-code': '744',
    'phone-code': '+47',
  },
  {
    name: 'Sweden',
    'alpha-2': 'SE',
    'alpha-3': 'SWE',
    'country-code': '752',
    'phone-code': '+46',
  },
  {
    name: 'Switzerland',
    'alpha-2': 'CH',
    'alpha-3': 'CHE',
    'country-code': '756',
    'phone-code': '+41',
  },
  {
    name: 'Syrian Arab Republic',
    'alpha-2': 'SY',
    'alpha-3': 'SYR',
    'country-code': '760',
    'phone-code': '+963',
  },
  {
    name: 'Taiwan, Province of China',
    'alpha-2': 'TW',
    'alpha-3': 'TWN',
    'country-code': '158',
    'phone-code': '+886',
  },
  {
    name: 'Tajikistan',
    'alpha-2': 'TJ',
    'alpha-3': 'TJK',
    'country-code': '762',
    'phone-code': '+992',
  },
  {
    name: 'Tanzania, United Republic of',
    'alpha-2': 'TZ',
    'alpha-3': 'TZA',
    'country-code': '834',
    'phone-code': '+255',
  },
  {
    name: 'Thailand',
    'alpha-2': 'TH',
    'alpha-3': 'THA',
    'country-code': '764',
    'phone-code': '+66',
  },
  {
    name: 'Timor-Leste',
    'alpha-2': 'TL',
    'alpha-3': 'TLS',
    'country-code': '626',
    'phone-code': '+670',
  },
  {
    name: 'Togo',
    'alpha-2': 'TG',
    'alpha-3': 'TGO',
    'country-code': '768',
    'phone-code': '+228',
  },
  {
    name: 'Tokelau',
    'alpha-2': 'TK',
    'alpha-3': 'TKL',
    'country-code': '772',
    'phone-code': '+690',
  },
  {
    name: 'Tonga',
    'alpha-2': 'TO',
    'alpha-3': 'TON',
    'country-code': '776',
    'phone-code': '+676',
  },
  {
    name: 'Trinidad and Tobago',
    'alpha-2': 'TT',
    'alpha-3': 'TTO',
    'country-code': '780',
    'phone-code': '+1-868',
  },
  {
    name: 'Tunisia',
    'alpha-2': 'TN',
    'alpha-3': 'TUN',
    'country-code': '788',
    'phone-code': '+216',
  },
  {
    name: 'Turkey',
    'alpha-2': 'TR',
    'alpha-3': 'TUR',
    'country-code': '792',
    'phone-code': '+90',
  },
  {
    name: 'Turkmenistan',
    'alpha-2': 'TM',
    'alpha-3': 'TKM',
    'country-code': '795',
    'phone-code': '+993',
  },
  {
    name: 'Turks and Caicos Islands',
    'alpha-2': 'TC',
    'alpha-3': 'TCA',
    'country-code': '796',
    'phone-code': '+1-649',
  },
  {
    name: 'Tuvalu',
    'alpha-2': 'TV',
    'alpha-3': 'TUV',
    'country-code': '798',
    'phone-code': '+688',
  },
  {
    name: 'Uganda',
    'alpha-2': 'UG',
    'alpha-3': 'UGA',
    'country-code': '800',
    'phone-code': '+256',
  },
  {
    name: 'Ukraine',
    'alpha-2': 'UA',
    'alpha-3': 'UKR',
    'country-code': '804',
    'phone-code': '+380',
  },
  {
    name: 'United Arab Emirates',
    'alpha-2': 'AE',
    'alpha-3': 'ARE',
    'country-code': '784',
    'phone-code': '+971',
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    'alpha-2': 'GB',
    'alpha-3': 'GBR',
    'country-code': '826',
    'phone-code': '+44',
  },
  {
    name: 'United States of America',
    'alpha-2': 'US',
    'alpha-3': 'USA',
    'country-code': '840',
    'phone-code': '+1',
  },
  {
    name: 'Uruguay',
    'alpha-2': 'UY',
    'alpha-3': 'URY',
    'country-code': '858',
    'phone-code': '+598',
  },
  {
    name: 'Uzbekistan',
    'alpha-2': 'UZ',
    'alpha-3': 'UZB',
    'country-code': '860',
    'phone-code': '+998',
  },
  {
    name: 'Vanuatu',
    'alpha-2': 'VU',
    'alpha-3': 'VUT',
    'country-code': '548',
    'phone-code': '+678',
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    'alpha-2': 'VE',
    'alpha-3': 'VEN',
    'country-code': '862',
    'phone-code': '+58',
  },
  {
    name: 'Viet Nam',
    'alpha-2': 'VN',
    'alpha-3': 'VNM',
    'country-code': '704',
    'phone-code': '+84',
  },
  {
    name: 'Virgin Islands (British)',
    'alpha-2': 'VG',
    'alpha-3': 'VGB',
    'country-code': '092',
    'phone-code': '+1-284',
  },
  {
    name: 'Wallis and Futuna',
    'alpha-2': 'WF',
    'alpha-3': 'WLF',
    'country-code': '876',
    'phone-code': '+681',
  },
  {
    name: 'Western Sahara',
    'alpha-2': 'EH',
    'alpha-3': 'ESH',
    'country-code': '732',
    'phone-code': '+212',
  },
  {
    name: 'Yemen',
    'alpha-2': 'YE',
    'alpha-3': 'YEM',
    'country-code': '887',
    'phone-code': '+967',
  },
  {
    name: 'Zambia',
    'alpha-2': 'ZM',
    'alpha-3': 'ZMB',
    'country-code': '894',
    'phone-code': '+260',
  },
  {
    name: 'Zimbabwe',
    'alpha-2': 'ZW',
    'alpha-3': 'ZWE',
    'country-code': '716',
    'phone-code': '+263',
  },
]

export const Flag = ({iso}: {iso: string}) => (
  <span className={`fi fi-${iso.toLowerCase()}`} />
)
