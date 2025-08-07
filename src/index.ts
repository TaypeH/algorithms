import inquirer from 'inquirer';
import { spawn } from 'child_process';

type Command = {
    name: string;
    run: () => void;
};

const commands: Command[] = [
    {
        name: 'sorting',
        run: () => {
            const tsc = spawn('tsc', ['--build'], { stdio: 'inherit' });
            tsc.on('exit', code => process.exit(code ?? 0));
        },
    },
    {
        name: 'Выход',
        run: () => process.exit(0),
    },
];

async function showMenu(): Promise<void> {

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Выберите команду:',
            choices: commands.map(cmd => cmd.name),
        },
    ]);

    const cmd = commands.find(c => c.name === answers.choice);

    if (cmd) cmd.run();
}

showMenu();
