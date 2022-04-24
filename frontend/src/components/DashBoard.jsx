import React from 'react'
import { Link } from 'react-router-dom'

export default function DashBoard() {
  return (
    <div className='dashboard'>
                <div className="dashboard-content">
                    <div className="container">
                        
                        <table className='table table-hover mt-5'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/addquestion" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Add Question</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/managequestion" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Manage Questions</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/auto" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Auto Generate</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/manual" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Manual Generate</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/managescripts" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Manage Scripts</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-design">
                                            <div className="card w-80">
                                                <Link to="/managequestion" className='linkName text-decoration-none text-dark'>
                                                    <div className="card-body">
                                                        <div className="card-title "><h6 className='text-center'>Logout</h6></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
  )
}
