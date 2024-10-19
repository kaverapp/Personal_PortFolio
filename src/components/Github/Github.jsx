import { useLoaderData } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useState } from "react";

export const Github = () => {
    const data = useLoaderData();
    const [error, setError] = useState(null); // State for tracking errors

    return (
        <div className="h-96 w-96 relative mx-auto top-1/2 transform -translate-y-1/2 mt-80">
            {error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : data ? (
                <CardContainer className="inter-var">
                    <CardBody className="text-center">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {data.name ? data.name : "No Name Available"}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={data.avatar_url}
                                alt="Avatar"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            />
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            @{data.login}
                        </CardItem>
                        <p className="text-xl font-bold relative z-20 mt-2 text-black">
                            Public Repos: {data.public_repos}
                        </p>
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                View GitHub Profile
                            </CardItem>
                        </a>
                    </CardBody>
                </CardContainer>
            ) : (
                <div className="text-center text-gray-500">Loading...</div>
            )}
        </div>
    );
};

export const gitHubLoader = async () => {
    try {
        const response = await fetch("https://api.github.com/users/kaverapp");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
