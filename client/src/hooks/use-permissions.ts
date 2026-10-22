import { PermissionType } from "@/constant";
import { UserType, WorkspaceWithMembersType } from "@/types/api.type";
import { useEffect, useMemo, useState } from "react";

function isUserIdObject(userId: unknown): userId is { _id: string } {
  return (
    typeof userId === 'object' &&
    userId !== null &&
    '_id' in userId &&
    typeof (userId as any)._id === 'string'
  );
}

const usePermissions = (
  user: UserType | undefined,
  workspace: WorkspaceWithMembersType | undefined
) => {
  const [permissions, setPermissions] = useState<PermissionType[]>([]);

  useEffect(() => {
    if (user && workspace) {
      const member = workspace.members.find(
        (member) => {
          if (typeof member.userId === 'string') {
            return member.userId === user._id;
          } else if (isUserIdObject(member.userId)) {
            return member.userId._id === user._id;
          }
          return false;
        }
      );
      // Debug logging
      console.log('[usePermissions] user:', user);
      console.log('[usePermissions] workspace:', workspace);
      console.log('[usePermissions] found member:', member);
      if (member) {
        setPermissions(member.role.permissions || []);
      }
    }
  }, [user, workspace]);

  return useMemo(() => permissions, [permissions]);
};

export default usePermissions;
