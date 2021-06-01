import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceConditionalForwarderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#directory_id DirectoryServiceConditionalForwarder#directory_id}.
     */
    readonly directoryId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#dns_ips DirectoryServiceConditionalForwarder#dns_ips}.
     */
    readonly dnsIps: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}.
     */
    readonly remoteDomainName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder}.
 */
export declare class DirectoryServiceConditionalForwarder extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DirectoryServiceConditionalForwarderConfig);
    private _directoryId;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    private _dnsIps;
    get dnsIps(): string[];
    set dnsIps(value: string[]);
    get dnsIpsInput(): string[];
    get id(): string;
    private _remoteDomainName;
    get remoteDomainName(): string;
    set remoteDomainName(value: string);
    get remoteDomainNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
