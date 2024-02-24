/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: {
        25: '#7A7E80',
        50: '#464A4D',
        75: '#161719',
        100: '#0D0E0F'
      },
      light: {
        20: '#91919F',
        40: '#F2F4F5',
        60: '#F7F9FA',
        80: '#FBFBFB',
        100: '#FFFFFF'
      },
      violet: {
        20: '#EEE5FF',
        40: '#D3BDFF',
        60: '#B18AFF',
        80: '#8F57FF',
        100: '#7F3DFF'
      },
      red: {
        20: '#FDD5D7',
        40: '#FDA2A9',
        60: '#FD6F7A',
        80: '#FD5662',
        100: '#FD3C4A'
      },
      green: {
        20: '#CFFAEA',
        40: '#93EACA',
        60: '#65D1AA',
        80: '#2AB784',
        100: '#00A86B'
      },
      yellow: {
        20: '#FCEED4',
        40: '#FCDDA1',
        60: '#FCCC6F',
        80: '#FCBB3C',
        100: '#FCAC12'
      },
      blue: {
        20: '#BDDCFF',
        40: '#8AC0FF',
        60: '#57A5FF',
        80: '#248AFF',
        100: '#0077FF'
      }
    },
    fontSize: {
      'title-x': ['64px', '80px'],
      'title-1': ['32px', '34px'],
      'title-2': ['24px', '22px'],
      'title-3': ['18px', '22px'],
      'regular-1': ['16px', '19px'],
      'regular-2': ['16px', '19px'],
      'regular-3': ['14px', '18px'],
      small: ['13px', '16px'],
      tiny: ['12px', '12px']
    },
    extend: {
      padding: {
        "default" : "20px"
      }
    }
  },
  plugins: []
}
