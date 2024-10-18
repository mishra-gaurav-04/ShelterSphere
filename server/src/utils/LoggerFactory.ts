import {transports,format} from 'winston';
import {WinstonModule} from 'nest-winston';
import 'winston-daily-rotate-file';

export const LoggerFactory = (appName:string) => {
   return WinstonModule.createLogger({
        transports : [
            new transports.DailyRotateFile({
                filename : `logs/%%DATE%%-error.log`,
                level : 'error',
                format : format.combine(format.timestamp(),format.json()),
                datePattern : 'YYYY-MM-DD',
                zippedArchive :false,
                maxFiles : '1d'
            }),

            new transports.DailyRotateFile({
                filename : `logs/%DATE%-combined.log`,
                format : format.combine(format.timestamp(),format.json()),
                datePattern : 'YYYY-DD-MM',
                zippedArchive : false,
                maxFiles : '1d'
            }),

            new transports.Console({
                format : format.combine(
                    format.cli(),
                    format.splat(),
                    format.timestamp(),
                    format.colorize(),
                    format.printf((info) => {
                        return `${appName}::${info.timestamp}::${info.level}::${info.message}`;
                    })
                )
            })
        ]
    })
}