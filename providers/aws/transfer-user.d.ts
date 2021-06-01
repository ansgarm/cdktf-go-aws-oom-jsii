import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory TransferUser#home_directory}.
     */
    readonly homeDirectory?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_type TransferUser#home_directory_type}.
     */
    readonly homeDirectoryType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#policy TransferUser#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#role TransferUser#role}.
     */
    readonly role: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#server_id TransferUser#server_id}.
     */
    readonly serverId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags TransferUser#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags_all TransferUser#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#user_name TransferUser#user_name}.
     */
    readonly userName: string;
    /**
     * home_directory_mappings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_mappings TransferUser#home_directory_mappings}
     */
    readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
}
export interface TransferUserHomeDirectoryMappings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#entry TransferUser#entry}.
     */
    readonly entry: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#target TransferUser#target}.
     */
    readonly target: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}.
 */
export declare class TransferUser extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: TransferUserConfig);
    get arn(): string;
    private _homeDirectory?;
    get homeDirectory(): string;
    set homeDirectory(value: string);
    resetHomeDirectory(): void;
    get homeDirectoryInput(): string | undefined;
    private _homeDirectoryType?;
    get homeDirectoryType(): string;
    set homeDirectoryType(value: string);
    resetHomeDirectoryType(): void;
    get homeDirectoryTypeInput(): string | undefined;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _role;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _serverId;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _userName;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    private _homeDirectoryMappings?;
    get homeDirectoryMappings(): TransferUserHomeDirectoryMappings[];
    set homeDirectoryMappings(value: TransferUserHomeDirectoryMappings[]);
    resetHomeDirectoryMappings(): void;
    get homeDirectoryMappingsInput(): TransferUserHomeDirectoryMappings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
