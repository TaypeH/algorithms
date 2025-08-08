import inquirer from 'inquirer';
import happyTicket from './algorithms/happy-ticket/index.js';

type Command = {
    name: string;
    run: () => void;
};

const commands: Command[] = [
    {
        name: 'happy ticket',
        run: happyTicket.run,
    },
    {
        name: 'exit',
        run: () => process.exit(0),
    },
];

async function showMenu(): Promise<void> {

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'choose task:',
            choices: commands.map(cmd => cmd.name),
        },
    ]);

    const cmd = commands.find(c => c.name === answers.choice);

    if (cmd) cmd.run();
}

showMenu();
