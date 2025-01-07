 \documentclass{article}
\usepackage{hyperref}

\title{Job Hunt Project}
\author{}
\date{}

\begin{document}

\maketitle

\section*{About}
The Job Hunt project is an advanced job portal that allows users to browse available jobs, apply, and manage their profiles with ease. The portal includes various features designed to make job search seamless and efficient. Below are the core features of this application:

\begin{enumerate}
    \item \textbf{User Authentication System}
    \begin{itemize}
        \item Secure login and registration for users.
        \item Registration requires basic details such as name, email, and password.
        \item Role-based access to ensure the correct permissions for different types of users (job seekers and administrators).
    \end{itemize}
    \item \textbf{Job Browsing}
    \begin{itemize}
        \item Job listings can be searched and filtered based on:
        \begin{itemize}
            \item \textit{Location}
            \item \textit{Role}
            \item Other user preferences
        \end{itemize}
    \end{itemize}
    \item \textbf{User Profile Management}
    \begin{itemize}
        \item Users can create and update their personal profiles, including adding resumes, contact details, and other personal information.
        \item Profile completion is an important step for successful job application submission.
    \end{itemize}
    \item \textbf{Job Application}
    \begin{itemize}
        \item Ability to apply for jobs directly from the job listings.
        \item Resume submission is supported during the job application process.
        \item \textit{Check application status} — users can track their application status for better visibility.
    \end{itemize}
    \item \textbf{Admin Panel}
    \begin{itemize}
        \item Admin users can:
        \begin{itemize}
            \item Add, update, and delete job listings.
            \item Manage user accounts.
            \item Oversee application data and update the status.
        \end{itemize}
    \end{itemize}
    \item \textbf{Filters}
    \begin{itemize}
        \item Users can filter job listings by:
        \begin{itemize}
            \item \textit{Location}
            \item \textit{Role}
        \end{itemize}
        \item Admins can easily apply filters to view specific job applications.
    \end{itemize}
\end{enumerate}

\section*{Features}
\begin{itemize}
    \item \textbf{Location Filter}: Filter jobs based on preferred locations to find more suitable positions.
    \item \textbf{Role Filter}: Narrow down job listings by selected job roles.
    \item \textbf{Resume Submission}: Attach and submit a resume while applying for job positions.
    \item \textbf{Profile Making}: Complete your profile with personal and professional details to enhance your application.
\end{itemize}

\section*{Technologies Used}
\begin{itemize}
    \item \textbf{Frontend}: React, HTML, CSS
    \item \textbf{Backend}: Node.js, Express
    \item \textbf{Database}: MongoDB 
    \item \textbf{Authentication}: JWT (JSON Web Tokens) for secure login
\end{itemize}

\section*{Installation}
Follow these steps to get the project running locally:

\begin{enumerate}
    \item Clone the repository:
    \begin{verbatim}
    git clone https://github.com/HimanshuSahu-1/JobHunt.git
    \end{verbatim}
    \item Install dependencies for both frontend and backend:
    \begin{itemize}
        \item Frontend:
        \begin{verbatim}
        cd frontend
        npm install
        \end{verbatim}
        \item Backend:
        \begin{verbatim}
        cd backend
        npm install
        \end{verbatim}
    \end{itemize}
    \item Start the frontend and backend servers:
    \begin{itemize}
        \item For the frontend, use the following command:
        \begin{verbatim}
        npm run dev 
        \end{verbatim}
        \item For the backend, run:
        \begin{verbatim}
        npm run dev
        \end{verbatim}
    \end{itemize}
    \item Open your browser and navigate to \url{http://localhost:5173} for the frontend interface.
\end{enumerate}

\section*{Contributing}
\begin{enumerate}
    \item Fork the repository
    \item Create your feature branch (\texttt{git checkout -b feature-name})
    \item Commit your changes (\texttt{git commit -m 'Add new feature'})
    \item Push to the branch (\texttt{git push origin feature-name})
    \item Open a Pull Request
\end{enumerate}

\section*{License}


\section*{Contact}
For further inquiries or collaboration opportunities, please contact me at:  
\begin{itemize}
    \item \texttt{hsahu8268@gmail.com}
    \item \href{https://www.linkedin.com/in/himanshu-sahu-}{LinkedIn}
\end{itemize}

\end{document}
