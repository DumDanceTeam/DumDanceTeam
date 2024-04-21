import { Invitation } from "@prisma/client";

interface InvitationsProps {
  allInvitations: Invitation[];
}

export const Invitations = ({ allInvitations }: InvitationsProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex items-center gap-10 font-bold text-sm">
        <div className="flex flex-col gap-10">
          <p>nume_copil</p>
          <div className="space-y-5">
            {allInvitations.map((reg) => (
              <div key={reg.id} className="text-sm font-normal">
                <p>{reg.name}</p>
              </div>
            ))}
          </div>
        </div>
       
        <div className="flex flex-col gap-10">
          <p>link_invitatie</p>
          <div className="space-y-5">
            {allInvitations.map((reg) => (
              <div key={reg.id} className="text-sm font-normal">
                <p>{reg.invitationLink}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p>nr_invitatii</p>
          <div className="space-y-5">
            {allInvitations.map((reg) => (
              <div key={reg.id} className="text-sm font-normal">
                <p>{String(reg.nrInvitati)}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Invitations;
