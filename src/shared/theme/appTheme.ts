import {Dimensions} from 'react-native';
import {RF} from './responsive';

const {width, height} = Dimensions.get('window');

export const gray = '#95979D';
export const medium_Gray = '#74767E';
export const low_gray = '#838589';
export const light_grey = '#F9FAFB';
export const TEXT = 'black';
export const GREY = 'grey';
export const BLACK = 'black';
export const WHITE = 'white';

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;

export const mulish_regular = 'Mulish-Regular';
export const mulish_bold = 'Mulish-Bold';
export const mulish_medium = 'Mulish-Medium';

export const customFonts = {
  fonts: {
    primary: 'PlusJakartaSans-Regular',
    medium: 'PlusJakartaSans-Medium',
    bold: 'PlusJakartaSans-Bold',
  },
};

export const darkThemeStyle = {
  colors: {},
};

export const defaultTheme = {
  colors: {
    lightGray: '#F8F8F8',
    blackText: '#2A3333',
  },
};
export const LAYOUT = {
  MARGIN: {
    SUPERLOW: RF(2),
    VERYLOW: RF(4),
    LOW: RF(8),
    MID_LOW: RF(12),
    NORMAL: RF(16),
    HIGH: RF(24),
    VERYHIGH: RF(32),
    SUPERHIGH: RF(48),
    NOVAHIGH: RF(60),
  },
  PADDING: {
    SUPERLOW: RF(2),
    VERYLOW: RF(4),
    LOW: RF(8),
    NORMAL: RF(16),
    HIGH: RF(24),
    VERYHIGH: RF(32),
    SUPERHIGH: RF(48),
  },
  RADIUS: {
    BOX: RF(10),
    SMALLBOX: RF(5),
    OVAL: RF(24),
    SelectCard: RF(16),
    medium: RF(30),
    FULL: RF(100),
  },
};
