'use client';
import React from 'react';
import Link from 'next/link';

export default function PlayerRow({ player, onEdit, onDelete }) {
    return (
        <tr>
            <td className='p-2 px-4 text-center'>{player.nickname}</td>
            <td className='p-2 px-4 text-center'>{player.tier}</td>
            <td className='p-2 px-4 text-center font-bold text-indigo-400'>
                {player.steamProfile ? (
                    <Link href={player.steamProfile} target={"_blank"} rel={"noreferrer"} className='flex gap-2 items-center justify-center'>
                        <span>
                            Acessar
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                        </span>
                    </Link>
                ) : '-'}
            </td>
            {player.vip ?
                <td className='p-2 px-4 text-center text-green-500 font-bold'>Sim</td>
                :
                <td className='p-2 px-4 text-center text-red-500 font-bold'>Não</td>
            }
            <td className='flex gap-2 w-full justify-center p-2'>
                <button className='bg-gray-900 p-2 px-4 rounded-md' onClick={() => onEdit(player)}>Editar</button>
                <button className='bg-red-950 p-2 px-4 rounded-md' onClick={() => onDelete(player._id)}>Excluir</button>
            </td>
        </tr>
    );
}