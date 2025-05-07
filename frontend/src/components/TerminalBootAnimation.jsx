import React from "react";

function TerminalBootAnimation() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="w-full max-w-2xl p-4">
                <div className="terminal-window">
                    {/* Terminal header */}
                    <div className="bg-gray-800 p-2 rounded-t-md">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Terminal content */}
                    <div className="bg-black p-4 rounded-b-md h-80 font-mono text-green-400">
                        $ Hello World
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TerminalBootAnimation