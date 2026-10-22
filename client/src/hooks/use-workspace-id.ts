import { useLocation, useParams } from "react-router-dom";

const useWorkspaceId = () => {
  const params = useParams();
  if (params.workspaceId) return params.workspaceId as string;

  // Fallback: try to extract workspaceId from the URL path
  const location = useLocation();
  const match = location.pathname.match(/workspace\/(\w+)/);
  if (match && match[1]) return match[1];

  return undefined;
};

export default useWorkspaceId;
