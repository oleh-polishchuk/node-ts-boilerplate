import { Response } from 'express';

import { HttpStatus } from '../common/enums';

export default class ResponseService {
	static successful(res: Response, data) {
		return res.status(HttpStatus.OK).json(data);
	}
	static send(res: Response, data) {
		return res.status(HttpStatus.OK).send(data);
	}
	static redirection(res: Response, url: string) {
		return res.status(HttpStatus.MOVED_PERMANENTLY).redirect(url);
	}
	static badRequest(res: Response, data) {
		return res.status(HttpStatus.BAD_REQUEST).send(data);
	}
	static unauthorized(res: Response, data) {
		return res.status(HttpStatus.UNAUTHORIZED).send(data);
	}
	static notFound(res: Response, data) {
		return res.status(HttpStatus.NOT_FOUND).send(data);
	}
	static internalServerError(res: Response, data) {
		return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(data);
	}
}
