import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamResourceShareAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#share_arn RamResourceShareAccepter#share_arn}.
     */
    readonly shareArn: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#timeouts RamResourceShareAccepter#timeouts}
     */
    readonly timeouts?: RamResourceShareAccepterTimeouts;
}
export interface RamResourceShareAccepterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#create RamResourceShareAccepter#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#delete RamResourceShareAccepter#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter}.
 */
export declare class RamResourceShareAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig);
    get id(): string;
    get invitationArn(): string;
    get receiverAccountId(): string;
    get resources(): string[];
    get senderAccountId(): string;
    private _shareArn;
    get shareArn(): string;
    set shareArn(value: string);
    get shareArnInput(): string;
    get shareId(): string;
    get shareName(): string;
    get status(): string;
    private _timeouts?;
    get timeouts(): RamResourceShareAccepterTimeouts;
    set timeouts(value: RamResourceShareAccepterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): RamResourceShareAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
