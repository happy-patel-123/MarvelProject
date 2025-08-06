const DateFormats = {
	DASHED_DATE: 'DD-MM-YYYY',
	SLASH_DATE: 'DD/MM/YYYY',
	DASHED_DATE_REVERSED: 'YYYY-MM-DD',
	MONTH_YEAR: 'MM-YYYY',
	FULL_DATE: 'DD, MMMM YYYY',
	FULL_DATE_TIME: 'DD, MMMM YYYY HH:mm',
	FULL_DATE_WITH_TIME_AM_PM: 'DD, MMM YYYY - hh:mm A',
	DO_MMM: 'Do MMM',
	DDD_DO_MMM: 'ddd Do MMM',
	DD_MM_YYYY: 'DD, MMM YYYY',
	DATE_MONTH_YEAR: 'DD MMM YYYY',
	MM_DD_YYYY: 'MM/DD/YYYY',
	MONTH: 'MMM',
	DATE: 'DD',
	DAY: 'ddd',
	X: 'X',
	FULL_MONTH_YEAR: 'MMMM YYYY',
	DATE_WITH_TIME_AM_PM: 'DD/MM/YYYY hh:mm A'
};

const NodeEnvironment = {
	LOCAL: 'local',
	DEVELOPMENT: 'development',
	STAGING: 'staging',
};

const HeaderKeys = {
	AUTHORIZATION: 'Authorization',
};

const TokenTypes = {
	BEARER: 'Bearer'
};

const EMAIL_REGEX = /^(([^<>()[\];:\s@"]+(\.[^<>()[\];:\s@"]+)*)|(".+"))@(([^<>()[\].;:\s@"]+\.)+[^<>()[\].;:\s@"]{2,})$/iu;

const MOBILE_NO_REGEX = /^\d{6,12}$/u;

const PasswordRegex = {
	REGEX_UPPER_LOWERCASE_LETTERS: /(?=.*[a-z].*)(?=.*[A-Z].*)/u,
	REGEX_ONE_NUM: /[0-9]/u,
	REGEX_SYMBOL: /_|[^\w]/u,
	ALL_PASSWORD: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
};

const CountryCode = {
	INDIA: '+91',
};

const DeviceType = {
	ANDROID: 'android',
	IOS: 'ios',
	WINDOWS: 'windows',
	MAC_OS: 'macos',
	WEB: 'web',
}

export {
	DateFormats,
	EMAIL_REGEX,
	HeaderKeys,
	MOBILE_NO_REGEX,
	NodeEnvironment,
	TokenTypes,
	CountryCode,
	DeviceType,
	PasswordRegex
};
