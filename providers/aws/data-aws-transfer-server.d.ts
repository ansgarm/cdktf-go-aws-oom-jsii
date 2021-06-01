import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsTransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html#server_id DataAwsTransferServer#server_id}.
     */
    readonly serverId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server}.
 */
export declare class DataAwsTransferServer extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig);
    get arn(): string;
    get certificate(): string;
    get endpoint(): string;
    get endpointType(): string;
    get id(): string;
    get identityProviderType(): string;
    get invocationRole(): string;
    get loggingRole(): string;
    get protocols(): string[];
    get securityPolicyName(): string;
    private _serverId;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
