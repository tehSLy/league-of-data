import { Context } from "telegraf"
import { CommandData } from "../utils/commandMiddleware"

export const registerCommand = (config: {
    command: string,
    description?: string,
    handler(ctx: Context, commandData: CommandData): Promise<void> | void 
}) => {

}