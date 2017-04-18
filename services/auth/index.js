export const isLoggedIn = (role) => role !== '' && role !== undefined && role !== null
export const isAdmin = (role) => role === 'admin'
export const isAnnonomous = (role) => !role