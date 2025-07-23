/**
 * Footer component that displays the development credit
 * @returns The Footer component with a link to the developer's website
 */
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center py-4 mt-5">
            <p className="mb-0 text-muted">
                Desarrollado con ❤ por{' '}
                <a 
                    href="https://frani.be/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                >
                    frani.be
                </a>
            </p>
        </footer>
    )
}

export default Footer
