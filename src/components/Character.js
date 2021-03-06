import React from 'react'

export const Character = ({info}) => {
    return (
        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src={ info.image }
                    alt=""
                    class="h-full w-full"/>
            </div>

            <h2 class="mt-4 font-bold text-xl text-center">{info.name}</h2>
            <h6 class="mt-2 text-sm font-medium">{info.species} - {info.status}</h6>

            <p class="text-xs text-gray-500 text-center mt-3">
                {info.origin.name}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
                <li>
                    <a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
