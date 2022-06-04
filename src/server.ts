import { AddressInfo } from 'net';
import app from './app';

const server = app.listen(process.env.PORT, () => {
    const { port } = server.address() as AddressInfo;
    console.info(`HTTP Server listening on port ${port}`);
});
