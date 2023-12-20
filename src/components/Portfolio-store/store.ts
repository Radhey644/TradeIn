import {create} from "zustand"
import {persist} from "zustand/middleware"
// State types
type Share = {
  shareid: string,
  symbol: string,
  name: string,
  company_name: string,
  whislisted:boolean,
 };
 
 type State = {
  id: string,
  fullname: string,
  shares: Share[],
 };
 
 // Action types
 type Actions = {
  buyShare: (id: string) => void,
  sellShare: (id: string) => void,
  whislistShare:(id:string) => void,
  removeShareFromWhislist:(id:string) => void,
 };
 
 // Store hook
 export const useUserStore = create<State & Actions>()(
  persist(
     set => ({
       id:"",
       fullname:"",
       shares:[],
     })
     {name:"user-store",skipHydration:true}
  )
 )