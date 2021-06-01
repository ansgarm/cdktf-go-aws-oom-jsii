import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#body TransferSshKey#body}.
     */
    readonly body: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#server_id TransferSshKey#server_id}.
     */
    readonly serverId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#user_name TransferSshKey#user_name}.
     */
    readonly userName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key}.
 */
export declare class TransferSshKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: TransferSshKeyConfig);
    private _body;
    get body(): string;
    set body(value: string);
    get bodyInput(): string;
    get id(): string;
    private _serverId;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    private _userName;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
