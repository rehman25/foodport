const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://foodport-hnlg9jj90-admin-logochemist.vercel.app/' 