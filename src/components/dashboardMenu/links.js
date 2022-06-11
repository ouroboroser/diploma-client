import { BsPlusSquareDotted, BsList, BsDiagram3 } from 'react-icons/bs';
import { BiGitCommit, BiMessageRounded } from 'react-icons/bi';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

export const links = [
    {
        path: '/create-api-key',
        text: 'Create API Key',
        icon: <BsPlusSquareDotted size={20} />
    },
    {
        path: '/api-keys',
        text: 'List of API Keys',
        icon: <BsList size={20} />
    },
    {
        path: '/diagram',
        text: 'Look diagram',
        icon: <BiGitCommit size={20} />
    },
    {
        path: '/about',
        text: 'About your app',
        icon: <BiMessageRounded size={20} />
    },
    {
        path: '/docs',
        text: 'Documentation',
        icon: <HiOutlineDocumentDuplicate size={20} />
    },
    {
        path: '/logout',
        text: 'Log out from app',
        icon: <FiLogOut size={20} />
    },
];